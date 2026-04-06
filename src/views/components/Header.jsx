import { useProfile } from '../../hooks/useProfile'

export function Header() {
  const { name } = useProfile()

  return (
    <header className="header">
      <div className="header__brand">{name}</div>

      <nav className="header__nav">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}
