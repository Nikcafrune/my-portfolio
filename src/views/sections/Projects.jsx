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
          <h3>https://github.com/Nikcafrune/crud-java-angular.git</h3>
          <p>
            Pojeto de CRUD utilizando Java com Spring Boot no backend e Angular no frontend, com integração via API REST. O projeto 
            inclui funcionalidades de criação, leitura, atualização e exclusão de dados, seguindo boas práticas de desenvolvimento e 
            arquitetura de software.
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
