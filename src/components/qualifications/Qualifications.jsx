import React, { useState } from 'react'
import './qualifications.css'

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }


  return (
    <section className="qualifications section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
 

        <div className="qualification__container container">
            <div className="qualification__tabs">
                  <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={()=>toggleTab(1)}
                  >
                <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                  <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                  onClick={()=>toggleTab(2)}
                  >

                <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>
        </div>
          
        <div className="qualification__sections">
            <div className={toggleState ===1?"qualification__content qualification__content-active":"qualification__content"}>

                <div className="qualification__data">
                    <div className="">
                        <h3 className="qualification__title">a
                        </h3>
                        <span className="qualification__subtitle">Chile - Universidad</span>
                        <div className="qualification__calendar">2021 - presente
                        </div>
                        <i className="uil uil-calendar-alt"></i>
                    </div>
                    
                    <div className="">
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                    
                </div> 
                <div className="qualification__data">
                    <div></div>
                    <div className="">
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div className="">
                    <h3 className="qualification__title">b
                    </h3>
                    <span className="qualification__subtitle">Chile - Universidad</span>
                    <div className="qualification__calendar">2021 - presente
                    </div>
                    <i className="uil uil-calendar-alt"></i>
                </div>
                
            
                
                </div>
                <div className="qualification__data">
                    <div className="">
                        <h3 className="qualification__title">c
                        </h3>
                        <span className="qualification__subtitle">Chile - Universidad</span>
                        <div className="qualification__calendar">2021 - presente
                        </div>
                        <i className="uil uil-calendar-alt"></i>
                    </div>
                    
                    <div className="">
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    
                </div> 
                <div className="qualification__data">
                    <div></div>
                    <div className="">
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                        <div className="">
                            <h3 className="qualification__title">d</h3>
                            <span className="qualification__subtitle">Chile - Universidad</span>
                            <div className="qualification__calendar">2021 - presente</div>
                            <i className="uil uil-calendar-alt"></i>
                        </div>
                </div> 
            </div>
            <div className={toggleState ===2?"qualification__content qualification__content-active":"qualification__content"}>
                <div className="qualification__data">
                    <div className="">
                        <h3 className="qualification__title">q
                        </h3>
                        <span className="qualification__subtitle">Chile - Universidad</span>
                        <div className="qualification__calendar">2021 - presente
                        </div>
                        <i className="uil uil-calendar-alt"></i>
                    </div>
                    
                    <div className="">
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                    
                </div> 
                <div className="qualification__data">
                    <div></div>
                    <div className="">
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
                <div className="">
                    <h3 className="qualification__title">w
                    </h3>
                    <span className="qualification__subtitle">Chile - Universidad</span>
                    <div className="qualification__calendar">2021 - presente
                    </div>
                    <i className="uil uil-calendar-alt"></i>
                </div>
                
            
                
                </div>
                <div className="qualification__data">
                    <div className="">
                        <h3 className="qualification__title">e
                        </h3>
                        <span className="qualification__subtitle">Chile - Universidad</span>
                        <div className="qualification__calendar">2021 - presente
                        </div>
                        <i className="uil uil-calendar-alt"></i>
                    </div>
                    
                    <div className="">
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    
                </div> 
                <div className="qualification__data">
                    <div></div>
                    <div className="">
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                        <div className="">
                            <h3 className="qualification__title">r</h3>
                            <span className="qualification__subtitle">Chile - Universidad</span>
                            <div className="qualification__calendar">2021 - presente</div>
                            <i className="uil uil-calendar-alt"></i>
                        </div>
                </div> 
            </div>
        </div>

    </section>
  )
}

export default Qualifications