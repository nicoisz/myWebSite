import React from 'react'
import './contact.css'

const Contact = () => {
  return (
      <section className="contact section" id="contact">
          <h2 className="section__title">Get in touch</h2>
          <span className="section__subtitle">Contact me</span>

          <div className="contact__container container grid">
              <div className="contact__content">
                  <div className="contact__title">Talk to me</div>

                  <div className="contact__info">
                      <div className="contact__card">
                          <i className="bx bx contact__card-icon"></i>

                          <h3 className="contact__card-title">Email</h3>
                          <span className="contact__card-data">nicolasignacio.sz@gmail.com</span>

                          <a href="mailto:nicolasignacio.sz@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                      </div>
                      <div className="contact__card">
                          <i className="bx bx contact__card-icon"></i>

                          <h3 className="contact__card-title">WHatsapp</h3>
                          <span className="contact__card-data">+17809959077</span>

                          <a href="" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                      </div>
                      <div className="contact__card">
                          <i className="bx bx contact__card-icon"></i>

                          <h3 className="contact__card-title">Linkedin</h3>
                          <span className="contact__card-data">nicoisz</span>

                          <a href="" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                      </div>
                  </div>
              </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Write me your projects</h3>
          </div>
      </section>
  )
}

export default Contact