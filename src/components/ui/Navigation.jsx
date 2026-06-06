import { useState, useEffect } from 'react'
import './Navigation.css'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tech', label: 'Tech' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.4 }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="nav">
        <button className="nav-logo" onClick={() => scrollTo('hero')}>NS</button>
        <ul className="nav-links">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link${active === id ? ' active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="nav-dots">
        {SECTIONS.map(({ id }) => (
          <li key={id}>
            <button
              className={`nav-dot-btn${active === id ? ' active' : ''}`}
              onClick={() => scrollTo(id)}
              aria-label={id}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
