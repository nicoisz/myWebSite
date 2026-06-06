import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './sections.css'

export default function ContactSection() {
  const form = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs
      .sendForm(
        'service_7llin5s',
        'template_0ldwvrk',
        form.current,
        '_LeUJEz55mAVNq7J6'
      )
      .then(
        () => { setStatus('sent'); e.target.reset() },
        () => setStatus('error')
      )
  }

  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="contact-layout">
          {/* Left */}
          <div>
            <p className="section-label">Contact</p>
            <h2 className="contact-heading">
              Enter<br />the portal
            </h2>
            <p className="contact-sub">
              The sphere ahead is a gateway. Step through it —
              let's build something extraordinary together.
            </p>

            <div className="contact-items">
              <a
                href="mailto:nicolasignacio.sz@gmail.com"
                className="contact-item clickable"
              >
                <div className="contact-icon">✉</div>
                <span>nicolasignacio.sz@gmail.com</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=17809959077&text=Hey!+I+would+like+to+work+together"
                target="_blank"
                rel="noreferrer"
                className="contact-item clickable"
              >
                <div className="contact-icon">💬</div>
                <span>+1 780-9959077</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nicoisz/"
                target="_blank"
                rel="noreferrer"
                className="contact-item clickable"
              >
                <div className="contact-icon">in</div>
                <span>linkedin.com/in/nicoisz</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-input clickable"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input clickable"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Project</label>
              <textarea
                className="form-textarea clickable"
                name="project"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="form-submit clickable"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Transmitting…' : status === 'sent' ? '✓ Message sent' : 'Send message →'}
            </button>
            {status === 'error' && (
              <p style={{ color: '#ff6b6b', fontSize: '0.8rem', textAlign: 'center' }}>
                Transmission failed. Try again or email directly.
              </p>
            )}
          </form>
        </div>

        <p className="portal-hint">↑ The portal awaits above</p>
      </div>
    </section>
  )
}
