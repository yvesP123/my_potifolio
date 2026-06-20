const SKILLS = [
  { name: 'React & React Native', desc: 'Responsive web interfaces and cross-platform mobile apps' },
  { name: 'Java', desc: 'Robust backend services and enterprise applications' },
  { name: 'PHP', desc: 'Dynamic server-side apps and content management systems' },
  { name: 'Python (Django)', desc: 'Scalable web applications with the Django framework' },
  { name: 'C & C++', desc: 'System-level software and performance-critical code' },
  { name: 'HTML & CSS', desc: 'Accessible, responsive interfaces' },
  { name: 'SQL & PostgreSQL', desc: 'Designing and optimizing relational databases' },
  { name: 'MongoDB', desc: 'Flexible, document-based data storage' },
]

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <p className="eyebrow">capabilities</p>
        <h2 className="section-heading">What I build with</h2>
        <p className="section-sub">A toolkit spanning the full stack — frontend, backend, mobile, and data.</p>

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
