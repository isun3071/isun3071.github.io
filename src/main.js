// Effects and interactions only. Every piece of text is already in the prerendered HTML.
import './styles.css'

const root = document.documentElement
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)')
const prefersDark = matchMedia('(prefers-color-scheme: dark)')

const hero = createHero(document.querySelector('.hero'))
initTheme()
initFilters()
initPicker()
initCounters()
initSections()

function onMotionChange(callback) {
  reduceMotion.addEventListener('change', () => callback(!reduceMotion.matches))
}

/* Theme */

function initTheme() {
  const toggle = document.querySelector('[data-theme-toggle]')
  const themeColor = document.querySelector('meta[name="theme-color"]')
  const active = () => root.dataset.theme ?? (prefersDark.matches ? 'dark' : 'light')

  const sync = () => {
    const dark = active() === 'dark'
    toggle.setAttribute('aria-pressed', String(dark))
    themeColor.content = dark ? '#0a0a0b' : '#f2f2f2'
    hero.readColors()
  }

  toggle.addEventListener('click', () => {
    const next = active() === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
    const apply = () => {
      root.dataset.theme = next
      sync()
    }
    if (document.startViewTransition && !reduceMotion.matches) document.startViewTransition(apply)
    else apply()
  })

  prefersDark.addEventListener('change', sync)
  sync()
}

/* Hero: drifting dot grid, scan line, and findings that decode where the line crosses them */

function createHero(heroEl) {
  const canvas = heroEl.querySelector('.hero-canvas')
  const body = heroEl.querySelector('.hero-body')
  const terms = [...heroEl.querySelectorAll('.hero-terms li')].map((el) => ({ el, text: el.textContent, y: null }))
  const ctx = canvas.getContext('2d')

  const GAP = 32
  const DRIFT = 5 // px per second, diagonal
  const SWEEP = 7000 // ms per pass of the scan line
  const TRAIL = 1.1 // seconds a dot stays lit after the line passes it
  const REACH = 130 // px around the pointer that dots react to

  let width = 0
  let height = 0
  let colors = {}
  let pointer = null
  let frame = 0
  let visible = true
  let started = 0
  let lastY = -Infinity

  function readColors() {
    const style = getComputedStyle(root)
    colors = {
      dot: style.getPropertyValue('--dot').trim(),
      text: style.getPropertyValue('--text').trim(),
      accent: style.getPropertyValue('--accent').trim(),
    }
  }

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2)
    width = heroEl.clientWidth
    height = heroEl.clientHeight
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  // Place a term somewhere near the edges, clear of the name, buttons, toggle, and other terms.
  function place(term) {
    const heroBox = heroEl.getBoundingClientRect()
    const bodyBox = body.getBoundingClientRect()
    const blocked = [
      inflate(offset(bodyBox, heroBox), 20),
      { left: width - 76, top: 0, right: width, bottom: 76 },
      ...terms.filter((t) => t !== term && t.y !== null).map((t) => inflate(offset(t.el.getBoundingClientRect(), heroBox), 12)),
    ]
    const w = term.el.offsetWidth
    const h = term.el.offsetHeight
    for (let tries = 0; tries < 40; tries++) {
      const left = 16 + Math.random() * Math.max(0, width - w - 32)
      const top = height * 0.08 + Math.random() * height * 0.8
      const box = { left, top, right: left + w, bottom: top + h }
      if (blocked.some((b) => overlaps(box, b))) continue
      term.el.style.left = `${left}px`
      term.el.style.top = `${top}px`
      term.y = top + h / 2
      return true
    }
    return false
  }

  function reveal(term) {
    const { el, text } = term
    el.classList.add('on', 'hit')
    decode(el, text)
    setTimeout(() => el.classList.remove('hit'), 1400)
    setTimeout(() => {
      el.classList.remove('on')
      setTimeout(() => (term.y = null), 900)
    }, 4600)
  }

  // Arm two or three idle terms at the start of each pass; the line reveals them as it reaches them.
  function arm() {
    const idle = terms.filter((t) => t.y === null).sort(() => Math.random() - 0.5)
    const count = width < 600 ? 2 : 3
    for (const term of idle.slice(0, count)) {
      term.armed = place(term)
    }
  }

  function draw(now) {
    const elapsed = (now - started) / 1000
    const scanY = (((now - started) % SWEEP) / SWEEP) * (height + 40) - 20
    const speed = (height + 40) / (SWEEP / 1000)
    const trail = speed * TRAIL

    if (scanY < lastY) arm()
    for (const term of terms) {
      if (term.armed && lastY < term.y && scanY >= term.y) {
        term.armed = false
        reveal(term)
      }
    }
    lastY = scanY

    ctx.clearRect(0, 0, width, height)
    const shift = (elapsed * DRIFT) % GAP
    const lit = []

    ctx.beginPath()
    for (let y = shift - GAP; y < height + GAP; y += GAP) {
      const behind = scanY - y
      const scan = behind >= 0 && behind < trail ? 1 - behind / trail : 0
      for (let x = shift - GAP; x < width + GAP; x += GAP) {
        let near = 0
        let dx = 0
        let dy = 0
        if (pointer) {
          const px = x - pointer.x
          const py = y - pointer.y
          const distance = Math.hypot(px, py)
          if (distance < REACH) {
            near = 1 - distance / REACH
            const push = (near * near * 8) / (distance || 1)
            dx = px * push
            dy = py * push
          }
        }
        if (scan > 0 || near > 0) {
          lit.push(x + dx, y + dy, scan, near)
        } else {
          ctx.moveTo(x + 1.1, y)
          ctx.arc(x, y, 1.1, 0, Math.PI * 2)
        }
      }
    }
    ctx.fillStyle = colors.dot
    ctx.fill()

    for (let i = 0; i < lit.length; i += 4) {
      const [x, y, scan, near] = [lit[i], lit[i + 1], lit[i + 2], lit[i + 3]]
      ctx.beginPath()
      ctx.arc(x, y, 1.1 + near * 1.4 + scan * 0.6, 0, Math.PI * 2)
      if (scan > near) {
        ctx.globalAlpha = 0.25 + scan * 0.75
        ctx.fillStyle = colors.accent
      } else {
        ctx.globalAlpha = 0.2 + near * 0.6
        ctx.fillStyle = colors.text
      }
      ctx.fill()
    }

    ctx.globalAlpha = 0.85
    ctx.fillStyle = colors.accent
    ctx.fillRect(0, Math.round(scanY), width, 1)
    ctx.globalAlpha = 1
  }

  function loop(now) {
    draw(now)
    frame = requestAnimationFrame(loop)
  }

  function play() {
    if (!frame && visible && !document.hidden && heroEl.classList.contains('is-live')) frame = requestAnimationFrame(loop)
  }

  function pause() {
    cancelAnimationFrame(frame)
    frame = 0
  }

  function start() {
    heroEl.classList.add('is-live')
    resize()
    started = performance.now()
    lastY = -Infinity
    arm()
    play()
  }

  function stop() {
    pause()
    heroEl.classList.remove('is-live')
    for (const term of terms) {
      term.el.classList.remove('on', 'hit')
      term.el.removeAttribute('style')
      term.el.textContent = term.text
      term.y = null
      term.armed = false
    }
  }

  readColors()
  new ResizeObserver(() => heroEl.classList.contains('is-live') && resize()).observe(heroEl)
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    visible ? play() : pause()
  }).observe(heroEl)
  document.addEventListener('visibilitychange', () => (document.hidden ? pause() : play()))

  heroEl.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return
    const box = heroEl.getBoundingClientRect()
    pointer = { x: event.clientX - box.left, y: event.clientY - box.top }
  })
  heroEl.addEventListener('pointerleave', () => (pointer = null))

  if (!reduceMotion.matches) start()
  onMotionChange((motion) => (motion ? start() : stop()))

  return { readColors }
}

const GLYPHS = 'abcdefghijklmnopqrstuvwxyz0123456789:/<>_'

function decode(el, text) {
  const begin = performance.now()
  const duration = 650
  const step = (now) => {
    const progress = Math.min(1, (now - begin) / duration)
    const settled = Math.floor(progress * text.length)
    let out = text.slice(0, settled)
    for (let i = settled; i < text.length; i++) {
      out += text[i] === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
    }
    el.textContent = out
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

function offset(box, parent) {
  return { left: box.left - parent.left, top: box.top - parent.top, right: box.right - parent.left, bottom: box.bottom - parent.top }
}

function inflate(box, by) {
  return { left: box.left - by, top: box.top - by, right: box.right + by, bottom: box.bottom + by }
}

function overlaps(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top
}

/* Project filters */

function initFilters() {
  const buttons = [...document.querySelectorAll('[data-filter]')]
  const cards = [...document.querySelectorAll('.card')]
  const status = document.querySelector('[data-filter-status]')

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter
      for (const other of buttons) other.setAttribute('aria-pressed', String(other === button))

      let shown = 0
      for (const card of cards) {
        const match = filter === 'all' || card.dataset.tags.split(' ').includes(filter)
        card.hidden = !match
        card.classList.remove('enter')
        if (match) {
          card.style.setProperty('--i', shown++)
          void card.offsetWidth // restart the entrance animation
          card.classList.add('enter')
        }
      }
      status.textContent = `${shown} ${shown === 1 ? 'project' : 'projects'} shown`
    })
  }
}

/* Framework picker: one panel open at a time, details only after a click */

function initPicker() {
  const buttons = [...document.querySelectorAll('.picker-list button')]
  const panelFor = (button) => document.getElementById(button.getAttribute('aria-controls'))

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const opening = button.getAttribute('aria-expanded') !== 'true'
      for (const other of buttons) {
        const open = opening && other === button
        other.setAttribute('aria-expanded', String(open))
        panelFor(other).classList.toggle('open', open)
      }
    })
  }

  // Stagger the redaction bars inside each panel.
  for (const panel of document.querySelectorAll('.picker-panel, .case-study')) {
    panel.querySelectorAll('.redact').forEach((el, i) => el.style.setProperty('--i', i))
  }
}

/* Numbers count up the first time they scroll into view */

function initCounters() {
  const counters = [...document.querySelectorAll('[data-count]')]
  if (reduceMotion.matches) return

  const format = (value, decimals) =>
    value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

  const run = (el) => {
    const target = Number(el.dataset.count)
    const decimals = Number(el.dataset.decimals || 0)
    const begin = performance.now()
    const duration = 1600
    const step = (now) => {
      const progress = Math.min(1, (now - begin) / duration)
      const eased = 1 - Math.pow(1 - progress, 4)
      el.textContent = format(target * eased, decimals)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer.unobserve(entry.target)
        run(entry.target)
      }
    },
    { threshold: 0.8 },
  )

  for (const el of counters) {
    // Numbers already on screen keep their final value instead of flashing to zero.
    if (el.getBoundingClientRect().top > innerHeight) el.textContent = format(0, Number(el.dataset.decimals || 0))
    observer.observe(el)
  }
}

/* Each section heading draws its accent rule when the section scrolls in */

function initSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('seen')
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -15% 0px' },
  )
  document.querySelectorAll('.section').forEach((section) => observer.observe(section))
}
