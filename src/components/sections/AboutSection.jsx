import './sections.css'

const SERVICES = [
  {
    title: 'Custom Web Development',
    desc: 'Responsive, performance-optimised web apps built from scratch with modern React architecture.',
  },
  {
    title: 'Mobile App Development',
    desc: 'Cross-platform apps with Flutter & React Native — deployed to iOS and Android.',
  },
  {
    title: 'UI / UX Optimization',
    desc: 'Modern redesigns that convert — clean interfaces backed by performance engineering.',
  },
]

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="about-layout">
          {/* Left col: bio */}
          <div>
            <p className="about-label">About me</p>
            <h2 className="about-heading">
              8 years crafting<br />digital products
            </h2>
            <p className="about-bio">
              I'm a creative developer based in Canada with a passion for building
              beautiful, high-performance interfaces. From pixel-perfect UIs to
              scalable full-stack architectures, I turn ideas into real products.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years exp.</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">3</span>
                <span className="stat-label">Languages</span>
              </div>
            </div>

            <a
              className="about-cv-btn clickable"
              href="/Resume_Nicolas_Silva_Z.pdf"
              download
            >
              <i className="bx bx-download" />
              Download CV
            </a>
          </div>

          {/* Right col: services */}
          <div className="about-services">
            {SERVICES.map((s, i) => (
              <div className="service-card" key={i}>
                <p className="service-title">{s.title}</p>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
