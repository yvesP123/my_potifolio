const PALETTE = ['#2bb67d', '#e8a33d', '#5d8fe2', '#c46fd0', '#e2574c', '#3fb6c4']

function hashToIndex(str, mod) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 9973
  return h % mod
}

function initialsFor(name) {
  const cleaned = name.replace(/[—-].*$/, '').trim()
  const words = cleaned.split(' ').filter(Boolean)
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase()
  return cleaned.slice(0, 2).toUpperCase()
}

export default function ProjectLogo({ name, src }) {
  if (src) {
    return (
      <div className="project-logo">
        <img src={src} alt={`${name} logo`} />
      </div>
    )
  }

  const color = PALETTE[hashToIndex(name, PALETTE.length)]
  return (
    <div className="project-logo project-logo-placeholder" style={{ '--logo-color': color }} aria-hidden="true">
      <span>{initialsFor(name)}</span>
    </div>
  )
}
