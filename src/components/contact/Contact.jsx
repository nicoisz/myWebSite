import React, { useRef }  from 'react';
import './contact.css';
import { ReactComponent as Send } from "../../assets/send.svg";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7llin5s', 'template_0ldwvrk', form.current, 
    '_LeUJEz55mAVNq7J6',
      )
      .then(
        () => {
              console.log('SUCCESS!');
              e.target.reset()
        },
        (error) => {
            console.log('FAILED...', error.text);
            e.target.reset()

        },
      );
  };
    
  return (
      <section className="contact section" id="contact">
          <h2 className="section__title">Get in touch</h2>
          <span className="section__subtitle">Contact Me</span>

          <div className="contact__container container grid">
              <div className="contact__content">
                  <div className="contact__title">Talk to Me</div>

                  <div className="contact__info">
                      <div className="contact__card">
                        <a href="mailto:nicolasignacio.sz@gmail.com">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                        </a>
                      </div>
                      <div className="contact__card">
                        <a href="https://api.whatsapp.com/send/?phone=17809959077&text=Hey!+i+would+like+to+create+a+website&type=phone_number&app_absent=0" >
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">WHatsapp</h3>
                        </a>
                      </div>
                      <div className="contact__card">
                        <a href="https://www.linkedin.com/in/nicoisz/" className="contact__button">
                            <i className="bx bxl-linkedin contact__card-icon"></i>
                            <h3 className="contact__card-title">Linkedin</h3>
                        </a>
                      </div>
                  </div>
              </div>
              <div className="contact__content">
              <h3 className="contact__title">Write me your projects</h3>
              <form action="" className="contact__form" ref={form} onSubmit={sendEmail}>

                  <div className="contact__form-div">
                      <label htmlFor="" className="contact__form-tag">Name</label>
                      <input type="text" className="contact__form-input" name='name' placeholder='Insert your name'/>
                  </div>
                  <div className="contact__form-div">
                      <label htmlFor="" className="contact__form-tag">Email</label>
                      <input type="email" className="contact__form-input" name='email' placeholder='Insert your email'/>
                  </div>
                  <div className="contact__form-div contact__form-area">
                      <label htmlFor="" className="contact__form-tag">Project</label>
                      <textarea name='project' id='' cols='30' rows='10' className='contact__form-input' placeholder='Tell me your project'/>
                  </div>

                  <button href='#contact' className='button button--flex contact__button'>Send Message &nbsp;<span>
          <Send/></span>
        </button>
              </form>
          </div>
          </div>

         
      </section>
  )
}

export default Contact