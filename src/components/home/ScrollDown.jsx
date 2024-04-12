import React from 'react'
import { ReactComponent as ScrollDownSVG } from '../../assets/scroll.svg'
const ScrollDown = () => {
  return (
      <div className='home__scroll'>
          <a href='#about' className='home__scroll-button button--flex'>
          <ScrollDownSVG/>
              <span className='home__scroll-name'>Scroll down</span>
              <i className='uil uil-arrow-down'></i>
          </a>
      
    </div>
  )
}

export default ScrollDown
