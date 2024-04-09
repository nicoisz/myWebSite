import React from 'react'
import './noSpace.css'

const NoSpace = () => {
  return (
    <div>
        <div className="container">


            <div className="section">
                <p className="text">There is no space here</p>
                <img src="http://salehriaz.com/404Page/img/earth.svg"  alt="" className="earth"/>
                <img src="/rocket.png" alt="" className="rocket"/>
                <img src="http://salehriaz.com/404Page/img/moon.svg" alt="" className="moon"/>
                <img src="http://salehriaz.com/404Page/img/astronaut.svg"  alt="" className="ast"/>
            </div>
        
            <section className="wrapper">
                <div id="stars1"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
              </section>
              
         </div>
    </div>
  )
}

export default NoSpace
