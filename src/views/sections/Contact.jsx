import { useContact } from '../../hooks/useContact'

export function Contact() {
  const { whatsappLink, emailLink, githubLink, linkedinLink } = useContact()

  return (
    <section id="contato">
      <h2>Contato</h2>
      <p>Quer falar comigo? Me chama em um destes canais:</p>

      <div style={styles.row}>
        {/* WhatsApp primeiro */}
        <a
          style={styles.button}
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <span style={styles.icon} aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M19.11 17.47c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.64 1.1 2.82c.14.18 1.91 2.92 4.63 4.1.65.28 1.15.45 1.55.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.27.23-.61.23-1.14.16-1.25-.07-.11-.25-.18-.52-.31Z" />
              <path d="M26.67 5.33A13.23 13.23 0 0 0 16.04 0C8.75 0 2.83 5.92 2.83 13.21c0 2.32.61 4.58 1.77 6.57L2.72 32l12.47-1.84a13.2 13.2 0 0 0 6.32 1.61h.01c7.29 0 13.21-5.92 13.21-13.21 0-3.53-1.38-6.85-3.95-9.23Zm-5.15 23.2h-.01c-2.01 0-3.98-.54-5.7-1.56l-.41-.25-7.4 1.09 1.1-7.2-.27-.43a10.96 10.96 0 0 1-1.69-5.87c0-6.05 4.92-10.97 10.97-10.97 2.92 0 5.66 1.14 7.73 3.2a10.9 10.9 0 0 1 3.2 7.76c0 6.05-4.92 10.97-10.97 10.97Z" />
            </svg>
          </span>
          WhatsApp
        </a>

        <a style={styles.button} href={emailLink}>
          Email
        </a>

        <a
          style={styles.button}
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          style={styles.button}
          href={linkedinLink}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

const styles = {
  row: { display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16 },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 14px',
    borderRadius: 10,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.06)',
    color: '#e5e7eb',
  },
  icon: { display: 'inline-flex', lineHeight: 0 },
}
