import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://github.com/yvesP123" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/iraguha-yves-463775246/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        
        </div>
        <p>&copy; {new Date().getFullYear()} Yves Iraguha. All rights reserved.</p>
      </div>
    </footer>
  )
}
