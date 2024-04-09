import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import NoSpace from './noSpace/NoSpace'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <div>
      <section className='section home' id='home'>
        <div className='home__container container grid'>
          <div className='home__content grid'>
            <div className='home__img'></div>
            <Social />
            <Data />   
          </div>
          <ScrollDown/>
        </div>
      </section>

      <div className='squeezed'>
        <NoSpace/>
      </div>
    </div>
  )
}

export default Home
