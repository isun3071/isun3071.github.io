const LAB_COMPONENTS = [
  'Windows Server DC (AD)',
  'Windows Endpoints',
  'Wazuh SIEM',
  'Microsoft Defender',
  'Sysmon',
  'Kali Linux',
  'Metasploitable',
  'Ubuntu Server',
]

const PRACTICE_AREAS = [
  'Active Directory enumeration and privilege escalation',
  'Lateral movement under live AV/EDR',
  'Kerberos abuse and Golden Ticket forging',
  'krbtgt rotation and ticket invalidation validation',
  'Web application vulnerabilities in enterprise context (SQLi, XSS, insecure uploads, etc.)',
  'Vulnerability enumeration with Nessus, Nmap, and Nikto',
]

export default function EnterpriseLab() {
  return (
    <>
      <section id="lab" className="py-16 px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2
              className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: '#f97316' }}
            >
              Hands&#8209;On Environment
            </h2>
            <p className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              Enterprise Active Directory Lab
            </p>
            <p className="text-sm mt-3 font-medium" style={{ color: '#f97316' }}>
              Basis for the &ldquo;Labs Have Stakes&rdquo; Framework — NICE Conference 2026
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left — description + practice areas */}
            <div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                A Proxmox-based enterprise Active Directory environment with a Windows Server domain controller, multiple endpoints including my daily-driver machine, Wazuh SIEM, Sysmon, and live endpoint protection. The lab is designed with real stakes: if I break something, I harm my own workflow. That consequence is the point.
              </p>
              <br />
              <h3 className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: '#f97316' }}>
                What I Practice Here
              </h3>
              <ul className="space-y-3">
                {PRACTICE_AREAS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#f97316' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <br />
              <p className="text-sm leading-relaxed italic" style={{ color: 'var(--color-text-secondary)' }}>
                All offensive experimentation and pentesting is conducted in controlled environments I own and operate.
              </p>
            </div>

            {/* Right — component list */}
            <div className="card-elevated rounded-lg p-8">
              <h3 className="text-xs uppercase tracking-widest font-semibold mb-6" style={{ color: '#f97316' }}>
                Lab Stack
              </h3>
              <br />
              <div className="grid grid-cols-2 gap-3">
                {LAB_COMPONENTS.map((comp) => (
                  <div
                    key={comp}
                    className="rounded-md px-4 py-3 text-xs font-mono font-medium text-center"
                    style={{
                      backgroundColor: 'var(--color-accent-muted)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {comp}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  )
}
