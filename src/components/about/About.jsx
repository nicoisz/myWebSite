import React from 'react'
import AboutImg from "../../assets/about.jpg"
import CV from "../../assets/Resume_Nicolas_Silva_Z.pdf"
import './about.css'
import Info from "./Info"
import { ReactComponent as File} from "../../assets/files.svg"

const About = () => {
    return (
      
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
        
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">Front End & Mobile Developer, I create web pages with UI / UX user interface
                        , I have several years of experience and many clients are happy with the projects carried out.</p>
                    <a download="" href={CV} className="button button__flex">Download <File/></a>
                </div>
        </div>
    </section>
  )
}

export default About
