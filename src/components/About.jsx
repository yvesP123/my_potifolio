import profileImage from '../assets/me.jpeg'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-portrait">
          <div className="about-portrait-frame">
            <img
              src={profileImage}
              alt="Yves"
              className="about-portrait-image"
            />
          </div>
        </div>

        <div className="about-content">
          <p className="eyebrow">about me</p>
          <h2 className="section-heading">Full stack developer based in Rwanda</h2>
          <p>
            I'm a full stack developer with hands-on experience across web and mobile —
            comfortable owning a feature from database schema to the screen a user actually taps.
            My work spans React and React Native on the frontend, and Java, PHP, Python/Django,
            and C/C++ on the backend, with SQL, PostgreSQL, and MongoDB underneath.
          </p>
          <p>
            I've shipped production systems used by real organizations in Rwanda — from a
            mining-operations dashboard to a visitor-management system currently running inside a
            government ministry — and I care about building software that holds up after launch,
            not just demos well on day one.
          </p>
          <a
            href="#contact"
            className="btn"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  )
}
