import React, { useState, useEffect } from 'react'

const Info = () => {

//create a function that increases the count of the number of projects completed automatically when shown on the screen
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (counter <= 20) {
            setCounter(counter + 1);
            } 
        }, 200);
        return () => clearInterval(interval);
    }, [counter]);

    // console.log(counter);

  return (
      <div className='about__info grid'>
          <div className="about__box">
          <i className='bx bx-award about__icon'></i>
              <h3 className="about__title">Experience
              </h3>
              <span className="about__subtitle">8 years working</span>
          </div>
          <div className="about__box">
          <i className='bx bxs-briefcase-alt about__icon'></i>
              <h3 className="about__title">Completed
              </h3>
              <span className="about__subtitle">{counter >= 20 ? 'Many' : counter } projects</span>
          </div>
          <div className="about__box"><i className='bx bx-support about__icon'></i>
              <h3 className="about__title">Support
              </h3>
              <span className="about__subtitle">24/7</span>
          </div>
      
    </div>
  )
}

export default Info
