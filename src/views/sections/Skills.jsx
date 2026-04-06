export function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills__grid">
        <div className="skills__card">
          <h3 className="skills__title">Hard Skills</h3>

          <div className="skills__tags">
            <span className="tag">Java</span>
            <span className="tag">Python</span>
            <span className="tag">FastAPI</span>
            <span className="tag">APIs / Integrações</span>
            <span className="tag">LLMs</span>
            <span className="tag">SQL / SQL Server</span>
            <span className="tag">Git / GitHub</span>
            <span className="tag">Docker</span>
            <span className="tag">JavaScript</span>
            <span className="tag">CSS</span>
            <span className="tag">HTML</span>
            <span className="tag">Excel (VBA / Power Query)</span>
            <span className="tag">SAP S/4HANA</span>
          </div>
        </div>

        <div className="skills__card">
          <h3 className="skills__title">Soft Skills</h3>

          <ul className="skills__list">
            <li>Comunicação e colaboração em equipe</li>
            <li>Organização e foco em entregas (sprints)</li>
            <li>Proatividade e autonomia na resolução de problemas</li>
            <li>Pensamento analítico e atenção a detalhes</li>
            <li>Aprendizado rápido e adaptação</li>
            <li>Responsabilidade e comprometimento</li>
          </ul>
        </div>
      </div>
    </section>
  )
}