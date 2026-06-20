import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const ROLES = ['Full Stack Developer', 'Mobile App Developer', 'Web Developer', 'Software Engineer']

function useTypedRoles() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 40)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return text
}

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const typed = useTypedRoles()

  const handleNavClick = (href) => {
    setNavOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header id="home" className="hero">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}>
            Yves<span>.dev</span>
          </a>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="hamburger"
            onClick={() => setNavOpen(true)}
            aria-label="Open menu"
            aria-expanded={navOpen}
          >
            <Menu size={24} />
          </button>
        </nav>

        <div className={`mobile-nav ${navOpen ? 'active' : ''}`}>
          <button className="mobile-nav-close" onClick={() => setNavOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="hero-content">
          <p className="eyebrow">available for new projects · kigali, rwanda</p>
          <h1>Yves Iraguha</h1>
          <h2>
            <span className="typed-text">{typed}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </h2>
          <p className="hero-copy">
            I design and build full-stack products end to end — from React and React Native
            interfaces to Java, PHP, and Django backends, backed by clean, well-indexed databases.
          </p>
          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-solid"
              onClick={(e) => { e.preventDefault(); handleNavClick('#projects') }}
            >
              View my work <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="btn"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
