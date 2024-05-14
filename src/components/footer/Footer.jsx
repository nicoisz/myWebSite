import React from 'react'
import './footer.css'

const Footer = () => {
  return (
      <div className="footer">
          <div className="footer__container container">
              <h1 className="footer__title"> Nico
              </h1>

              <ul className='footer__list'>
                  <li>
                      <a href="#about" className='footer__link'>About</a>
                  </li>
                  <li>
                      <a href="#projects" className='footer__link'>Projects</a>
                  </li>
                  <li>
                      <a href="#services" className='footer__link'>Services</a>
                  </li>
                  <li>
                      <a href="#skills" className='footer__link'>Skills</a>
                  </li>
              </ul>
              <div className='footer__social'>
                  <a href="https://www.linkedin.com/in/nicoisz/" target='_blank' className="footer__social-link"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/nicoisz" target='_blank' className="footer__social-link"><i className="bx bxl-github"></i></a>
                <span className='footer__copy'></span>
              </div>
          </div>
      </div>
  )
}

export default Footer