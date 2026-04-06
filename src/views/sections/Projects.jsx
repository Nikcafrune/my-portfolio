import { useProjects } from '../../hooks/useProjects'
import { ProjectCard } from '../components/ProjectCard'

export function Projects() {
  const { projects, hasProjects } = useProjects()

  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <p>Alguns projetos que eu desenvolvi:</p>

      {!hasProjects ? (
        <div className="empty">
          <h3>Em breve</h3>
          <p>
            Estou construindo novos projetos e vou publicar aqui conforme eu for
            finalizando.
          </p>
        </div>
      ) : (
        <div style={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.repoUrl} {...p} />
          ))}
        </div>
      )}
    </section>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 16,
    marginTop: 16,
  },
}
