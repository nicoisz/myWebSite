import React from 'react'
import { ReactComponent as HomeHand } from "../../assets/hand.svg"
import { ReactComponent as Send } from "../../assets/send.svg"

const Data = () => {
  return (
      <div className='home__data'>
      
        <h1 className='home__title'>Nico Silva Zuniga
         <HomeHand/>
        </h1>
      
      <div>
        <h3 className='home__subtitle'>Front End & Mobile Developer</h3>
      </div>
      <div>
        <p className='home__description'>I'm a creative developer based in Canada, and i'm very passionate to my work.</p>
      </div>
    
        <a href='#contact' className='button button--flex'>say hello &nbsp;<span>
          <Send/></span>
        </a>
    </div>
  )
}

export default Data
