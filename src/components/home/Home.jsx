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
  {title: 'cooking', lang: 'en'},
  {title: 'Designing', lang: 'en'},
  {title: 'Diseñando', lang: 'es'},
  {title: 'coding', lang: 'en'},
  {title: 'programando', lang: 'es'},
  {title: 'building', lang: 'en'},
  {title: 'construyendo', lang: 'es'},
  {title: 'making a website', lang: 'en'},
  {title: 'haciendo una página web', lang: 'es'},
  {title: 'learning', lang: 'en'},
  {title: 'aprendiendo', lang: 'es'},
  {title: 'working', lang: 'en'},
  {title: 'trabajando', lang: 'es'},
  {title: 'creating', lang: 'en'},
  {title: 'creando', lang: 'es'},
  {title: 'developing', lang: 'en'},
  {title: 'desarrollando',  lang: 'es'},
]

//TODO crear una function que detecte la ip desde donde se esta acciendo al website y si es ingles
//muestre contenido en ingles y si es español muestre contenido en español
async function detectLanguage() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code;

    if (countryCode === 'ES') {
      return 'es';
    } else {
      return 'en';
    }
  } catch (error) {
    console.error('Error detecting language:', error);
    return 'en';
  }
}

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
      if(detectLanguage() === 'en') {
        
        setContent(textContent[randIndex].lang === 'en' && textContent[randIndex].title );
      } else {
        setContent(textContent[randIndex].title)
      }
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
