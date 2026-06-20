import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">selected work</p>
        <h2 className="section-heading">Projects</h2>
        <p className="section-sub">
          Live systems and apps I've built. Where a demo exists, the link and credentials sit
          right on the card — click "demo credentials" to expand.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
