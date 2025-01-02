import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import NoSpace from './noSpace/NoSpace'
import ScrollDown from './ScrollDown'
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Qualifications from '../../components/qualifications/Qualifications';
import Scroll from '../../components/scroll/Scroll';
import Services from '../../components/services/Services';
import Skills from '../../components/skills/Skills';

const Home = () => {
  return (
    
    <div>
      <Header></Header>
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
      <About />
      {/* <Skills /> */}
      <Services />
      {/* <Qualifications /> */}
      <Contact />
      <Footer />
        <Scroll />
      <div className='squeezed'>
        <NoSpace/>
      </div>
    </div>
  )
}

export default Home
