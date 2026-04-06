import { useProfile } from '../../hooks/useProfile'
import heroImg from '../../assets/hero.jpeg' 

export function Hero() {
  const { name, headline } = useProfile()

  return (
    <section id="inicio" className="hero">
      <div className="hero__text">
        <h1>{name}</h1>
        <p>{headline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projetos">
            Ver projetos
          </a>
          <a className="btn" href="#contato">
            Contato
          </a>
        </div>
      </div>

      <img
        className="hero__image"
        src={heroImg}
        alt={`Foto de ${name}`}
      />
    </section>
  )
}
