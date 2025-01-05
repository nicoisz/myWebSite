import React, { useState } from 'react'
import './services.css'

function Services() {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    if(toggleState === 1 || toggleState === 2 || toggleState === 3){
        window.addEventListener('click', function(e){
            if(e.target === document.querySelector('.active-modal')){
                document.querySelector('.active-modal').classList.remove('active-modal');
            }
        });
    }
    
  return (
      <section className="services section" id="services">
          <h2 className="section__title">Services</h2>
          <span className="section__subtitle">What I offer</span>

          <div className="services__container container grid">
              <div className="services__content">
                  <div>
                      <i className="uil uil-web-grid services__icon"></i>
                      <h3 className="services__title">Custom Web<br/>Development</h3>
                      <span className="services__button" onClick={()=>toggleTab(1)}>View More
                          <i className="uil uil-arrow-right services__button-icon"></i>
                      </span>

                      <div className={toggleState === 1 ? "services__modal active-modal ": "services__modal" }>
                          <div className="services__modal-content modal-container">
                              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                              <h3 className="services__modal-title">Custom Web Development</h3>
                              <p className="services__modal-description">I build modern, responsive websites tailored to your business needs & providing quality work to clients and companies.
                              </p>

                              <ul className="services__modal-services grid">
                                  <li className="services__modal-service">
                                      <i className="uil uil-check-circle services__modal-icon"></i>
                                      <p className="services__modal-info">Custom Designs: I create visually appealing and user-friendly websites that reflect your brand identity and leave a lasting impression on your audience.</p>
                                  </li>
                                  <li className="services__modal-service">
                                      <i className="uil uil-check-circle services__modal-icon"></i>
                                      <p className="services__modal-info">Responsive & Mobile-Friendly: Your website will look great and function perfectly on any device, ensuring a seamless user experience across desktops, tablets, and smartphones.</p>
                                  </li>
                                  <li className="services__modal-service">
                                      <i className="uil uil-check-circle services__modal-icon"></i>
                                      <p className="services__modal-info">Performance-Optimized: I build fast-loading, high-performing websites to improve user engagement and boost your search engine rankings.</p>
                                  </li>
                                  <li className="services__modal-service">
                                  <i className="uil uil-check-circle services__modal-icon"></i>
                                  <p className="services__modal-info">Integration & Scalability: I integrate your website with tools like CMS (WordPress), e-commerce platforms, or third-party APIs, ensuring scalability as your business grows.</p>
                              </li>
                              </ul>
                              <div className='modal__footer'>
                                <button onClick={()=>toggleTab(0)} className='button button__flex'>I’m Ready to Roll</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="services__content">
                  <div>
                      <i className="uil uil-arrow services__icon"></i>
                      <h3 className="services__title">Mobile App<br/>Development</h3>
                      <span className="services__button" onClick={()=>toggleTab(2)}>View More 
                          <i className="uil uil-arrow-right services__button-icon"></i>
                      </span>

                      <div className={toggleState === 2 ? "services__modal active-modal": "services__modal" }>
                          <div className="services__modal-content modal-container-2">
                              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                              <h3 className="services__modal-title">Mobile App Development</h3>
                              <p className="services__modal-description">Create cross-platform mobile apps using frameworks like React Native or Flutter.
                              </p>

                              <ul className="services__modal-services grid">
                                  <li className="services__modal-service">
                                      <i className="uil uil-check-circle services__modal-icon"></i>
                                      <p className="services__modal-info">Custom Cross-Platform Apps: I develop mobile apps using frameworks like React Native or Flutter, ensuring they run seamlessly on both Android and iOS devices.</p>
                                  </li>
                                  <li className="services__modal-service">
                                      <i className="uil uil-check-circle services__modal-icon"></i>
                                      <p className="services__modal-info">User-Centered Design: I focus on intuitive and engaging user interfaces to deliver a smooth and enjoyable experience for your customers.</p>
                                  </li>
                                  <li className="services__modal-service">
                                      <i className="uil uil-check-circle services__modal-icon"></i>
                                      <p className="services__modal-info">Feature-Rich & Scalable: From push notifications to in-app payments, I build apps with features tailored to your business needs, while ensuring scalability for future growth.</p>
                                  </li>
                                  <li className="services__modal-service">
                                  <i className="uil uil-check-circle services__modal-icon"></i>
                                  <p className="services__modal-info">Deployment & Support: I handle app store submissions for Google Play and the Apple App Store, and offer ongoing maintenance to keep your app running smoothly.</p>
                              </li>
                              </ul>
                              <div className='modal__footer'>
                                <button onClick={()=>toggleTab(0)} className='button button__flex'>Let’s Move Forward</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="services__content">
                  <div>
                      <i className="uil uil-edit services__icon"></i>
                      <h3 className="services__title">Visual - UI/UX  <br/>Optimization</h3>
                      <span className="services__button" onClick={()=>toggleTab(3)}>View More
                          <i className="uil uil-arrow-right services__button-icon"></i>
                      </span>

                      <div className={toggleState === 3 ? "services__modal active-modal": "services__modal" }>
                          <div className="services__modal-content modal-container-3">
                              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                              <h3 className="services__modal-title">Visual - UI/UX Optimization</h3>
                              <p className="services__modal-description">Audit and enhance the design and usability of existing websites or apps to improve user experience
                              </p>

                              <ul className="services__modal-services grid">
                                  <li className="services__modal-service">
                                      <i className="uil uil-check-circle services__modal-icon"></i>
                                      <p className="services__modal-info">Modern UI Redesign: I update outdated designs with modern, visually appealing interfaces that align with your brand and engage users.</p>
                                  </li>
                                  <li className="services__modal-service">
                                      <i className="uil uil-check-circle services__modal-icon"></i>
                                      <p className="services__modal-info">Performance Enhancements: I optimize your platform for faster loading times, responsive layouts, and seamless interactions to keep users engaged.</p>
                                  </li>
                              </ul>
                              <div className='modal__footer'>
                                <button onClick={()=>toggleTab(0)} className='button button__flex'>I’m In!</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Services