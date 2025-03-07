import React, { useState,useEffect } from 'react'
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
import ShineText from '../../components/shinyText/shine';

export const textContent = [
  {title: 'cooking'},
  {title: 'Designing'},
  {title: 'Diseñando'},
  {title: 'coding'},
  {title: 'programando'},
  {title: 'building'},
  {title: 'construyendo'},
  {title: 'making a website'},
  {title: 'haciendo una página web'},
  {title: 'learning'},
  {title: 'aprendiendo'},
  {title: 'working'},
  {title: 'trabajando'},
  {title: 'creating'},
  {title: 'creando'},
  {title: 'developing'},
  {title: 'desarrollando'},
]

function getRandomInt(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  if (random !== NaN) {
    return random

  }
}


const Home = () => {

  let [contentIndex, setContentIndex] = useState(0)
  let [content, setContent] = useState(textContent[contentIndex].title)
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      let randIndex = getRandomInt(0, textContent.length - 1);
      setContentIndex(randIndex);
      setContent(textContent[randIndex].title);
    }, 2000);

    return () => clearInterval(intervalId); 
  }, [textContent]); 

  


  return (
    
    <div className='home'>
      <div className="home_content">
        <ShineText text={content}/></div>
      <div className='squeezed'>
        <NoSpace/>
      </div>
    </div>
  )
}

export default Home
