import './sections.css'

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section" id="hero">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <p className="hero-eyebrow">Front End &amp; Mobile Developer</p>

        <h1 className="hero-title">
          Nico Silva
          <span>Zuniga</span>
        </h1>

        <p className="hero-subtitle">
          Building immersive digital experiences from Canada
        </p>

        <button className="hero-cta clickable" onClick={scrollToContact}>
          <span>Say Hello</span>
          <span style={{ fontSize: '1rem' }}>→</span>
        </button>

        <div className="hero-social">
          <a
            className="clickable"
            href="https://github.com/nicoisz"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="bx bxl-github" style={{ fontSize: '1.4rem' }} />
          </a>
          <a
            className="clickable"
            href="https://www.linkedin.com/in/nicoisz/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bx bxl-linkedin" style={{ fontSize: '1.4rem' }} />
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-hint-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
