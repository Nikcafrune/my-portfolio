import { useProfile } from '../../hooks/useProfile'

export function Footer() {
  const { name } = useProfile()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer__copy">
        © {year} {name}. Todos os direitos reservados.
      </p>

      <div className="footer__links">
        <a href="https://github.com/Nikcafrune" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nícollas-rodrigues-cafrune-7ab264293"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
