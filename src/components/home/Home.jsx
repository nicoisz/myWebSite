import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import NoSpace from './noSpace/NoSpace'

const Home = () => {
  return (
    <div>
      <div className='squeezed'>
        <NoSpace/>
      </div>
      <div className='main'></div>
      <section className='section home' id='home'>
        <div className='home__container container grid'>
          <div className='home__content grid'>
            <div className='home__img'></div>
            <Social />
            <Data />   
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
