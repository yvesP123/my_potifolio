import { useState } from 'react'
import { Copy, Check, ChevronDown } from 'lucide-react'

function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <button className="cred-field" onClick={handleCopy} aria-label={`Copy ${label}: ${value}`}>
      <span className="cred-field-label">{label}</span>
      <span className="cred-field-value">{value}</span>
      {copied ? <Check size={13} className="cred-copy-icon copied" /> : <Copy size={13} className="cred-copy-icon" />}
    </button>
  )
}

export default function CredentialTerminal({ credentials }) {
  const [open, setOpen] = useState(false)

  if (!credentials) return null
  const { note, sets } = credentials

  return (
    <div className="terminal">
      <button
        className="terminal-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="terminal-title">demo credentials</span>
        <ChevronDown size={15} className={`terminal-chevron ${open ? 'open' : ''}`} />
      </button>

      {open && (
        <div className="terminal-body">
          {note && <p className="terminal-note">{note}</p>}
          {sets && sets.length > 0 && (
            <div className="terminal-sets">
              {sets.map((s) => (
                <div className="terminal-set" key={s.label}>
                  <span className="terminal-set-label">{s.label}</span>
                  <div className="terminal-set-fields">
                    <CopyField label="user" value={s.username} />
                    <CopyField label="pass" value={s.password} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
