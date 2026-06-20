import { ExternalLink, Apple, Smartphone } from 'lucide-react'
import ProjectLogo from './ProjectLogo.jsx'
import CredentialTerminal from './CredentialTerminal.jsx'

function LinkIcon({ icon }) {
  if (icon === 'apple') return <Apple size={14} />
  if (icon === 'android') return <Smartphone size={14} />
  return <ExternalLink size={14} />
}

export default function ProjectCard({ project }) {
  const { name, period, tagline, description, points, links, credentials, logo, internalNote } = project

  return (
    <article className="project-card">
      <header className="project-card-header">
        <ProjectLogo name={name} src={logo} />
        <div className="project-card-heading">
          <h3>{name}</h3>
          <span className="project-period">{period}</span>
        </div>
      </header>

      <p className="project-tagline">{tagline}</p>
      <p className="project-description">{description}</p>

      <ul className="project-points">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      {internalNote && <p className="project-internal-note">{internalNote}</p>}

      {links.length > 0 && (
        <div className="project-links">
          {links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-sm ${l.kind === 'primary' ? 'btn-solid' : ''}`}
            >
              <LinkIcon icon={l.icon} />
              {l.label}
            </a>
          ))}
        </div>
      )}

      <CredentialTerminal credentials={credentials} />
    </article>
  )
}
