import { createServer, defineConfig } from 'vite'

// Renders src/entry-server.jsx into index.html, in dev and at build time, so the
// page ships as static HTML. React never runs in the browser; src/main.js only
// adds effects and interactions on top of the markup.
function prerender() {
  let root
  let devServer

  return {
    name: 'prerender',
    configResolved(config) {
      root = config.root
    },
    configureServer(server) {
      devServer = server
      // App markup is not in the client module graph, so reload the page when it changes.
      server.watcher.on('change', (file) => {
        if (/\.jsx$|content\.js$/.test(file)) server.ws.send({ type: 'full-reload' })
      })
    },
    async transformIndexHtml(html) {
      const server =
        devServer ??
        (await createServer({
          root,
          configFile: false,
          logLevel: 'error',
          appType: 'custom',
          server: { middlewareMode: true, hmr: false, ws: false },
          esbuild: { jsx: 'automatic' },
        }))
      try {
        const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
        return html.replace('<!--app-->', render())
      } finally {
        if (!devServer) await server.close()
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [prerender()],
  esbuild: { jsx: 'automatic' },
  base: '/', // important for user site
})
