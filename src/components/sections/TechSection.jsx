import './sections.css'

export default function TechSection() {
  return (
    <section className="section" id="tech">
      <div className="section-inner">
        <p className="section-label">Technology ecosystem</p>
        <h2 className="section-heading">
          The galaxy<br />I navigate
        </h2>
        <p className="section-desc">
          Every node in the field represents a technology I build with.
          Hover over any node to explore.
        </p>

        <div className="tech-hint">
          <div className="tech-hint-dot" />
          <span>Hover nodes to interact</span>
        </div>
      </div>
    </section>
  )
}
