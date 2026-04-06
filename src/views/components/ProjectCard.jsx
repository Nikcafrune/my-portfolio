export function ProjectCard({ title, description, tech, repoUrl }) {
  return (
    <a href={repoUrl} target="_blank" rel="noreferrer" style={styles.card}>
      <div style={styles.top}>
        <h3 style={styles.title}>{title}</h3>
        <span style={styles.link}>GitHub ↗</span>
      </div>

      <p style={styles.desc}>{description}</p>

      <div style={styles.techRow}>
        {tech.map((t) => (
          <span key={t} style={styles.badge}>
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}

const styles = {
  card: {
    display: 'block',
    padding: 16,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.06)',
    borderRadius: 12,
  },
  top: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 8,
  },
  title: { margin: 0, fontSize: 18, color: '#e5e7eb' },
  link: { fontSize: 12, color: '#9ca3af' },
  desc: { margin: 0, color: '#9ca3af' },
  techRow: { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  badge: {
    fontSize: 12,
    padding: '4px 8px',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#cbd5e1',
  },
}
