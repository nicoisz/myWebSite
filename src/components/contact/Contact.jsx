import React from 'react'
import './contact.css'
import { ReactComponent as Send } from "../../assets/send.svg"

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
                          <i className="bx bx-mail-send contact__card-icon"></i>

                          <h3 className="contact__card-title">Email</h3>
                          <span className="contact__card-data">nicolasignacio.sz@gmail.com</span>

                          <a href="mailto:nicolasignacio.sz@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                      </div>
                      <div className="contact__card">
                          <i className="bx bxl-whatsapp contact__card-icon"></i>

                          <h3 className="contact__card-title">WHatsapp</h3>
                          <span className="contact__card-data">+17809959077</span>
                          <a href="https://api.whatsapp.com/send/?phone=17809959077&text=Hey!+i+would+like+to+create+a+website&type=phone_number&app_absent=0" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                      </div>
                      <div className="contact__card">
                          <i className="bx bxl-linkedin contact__card-icon"></i>
                          
                          <h3 className="contact__card-title">Linkedin</h3>
                          <span className="contact__card-data">nicoisz</span>

                          <a href="https://www.linkedin.com/in/nicoisz/" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                      </div>
                  </div>
              </div>
          </div>

          <div className="contact__content">
              <h3 className="contact__title">Write me your projects</h3>
              <form action="" className="contact__form">
                  <div className="contact__form-div">
                      <label htmlFor="" className="contact__form-tag">Name</label>
                      <input type="text" className="contact__form-input" name='name' placeholder='Insert your name'/>
                  </div>
                  <div className="contact__form-div">
                      <label htmlFor="" className="contact__form-tag">Email</label>
                      <input type="email" className="contact__form-input" name='email' placeholder='Insert your email'/>
                  </div>
                  <div className="contact__form-div">
                      <label htmlFor="" className="contact__form-tag">Project</label>
                      <textarea name='project' id='' cols='30' rows='10' className='contact__form-input' placeholder='Tell me your project'/>
                  </div>

                  <a href='#contact' className='button button--flex'>say hello &nbsp;<span>
          <Send/></span>
        </a>
              </form>
          </div>
      </section>
  )
}

export default Contact