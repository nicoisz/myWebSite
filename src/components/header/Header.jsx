import React, { useState } from 'react'
import "./Header.css"

const Header = () => {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    if (this.scrollY >= 80) header.classList.add("scroll-header")
    else header.classList.remove("scroll-header")

  })
  
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");


  
  return (
    <header className="header">
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>Nico</a>

        <div className={Toggle?'nav__menu show-menu':'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className={activeNav==='#home'? 'nav__link active-link': 'nav__link'} onClick={()=>setActiveNav("#home")}>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className={activeNav==='#about'? 'nav__link active-link': 'nav__link'} onClick={()=>setActiveNav("#about")} >
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>
            {/* <li className='nav__item'>
              <a href='#skills' className={activeNav==='#skills'? 'nav__link active-link': 'nav__link'} onClick={()=>setActiveNav("#skills")}>
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li> */}
            <li className='nav__item'>
              <a href='#services' className={activeNav==='#services'? 'nav__link active-link': 'nav__link'} onClick={()=>setActiveNav("#services")}>
                <i className='uil uil-briefcase-alt nav__icon'></i> Services
              </a>
            </li>
            <li className='nav__item'>
              <a href='/portfolio' className={activeNav==='#portfolio'? 'nav__link active-link': 'nav__link'} onClick={()=>setActiveNav("#portfolio")}>
                <i className='uil uil-scenery nav__icon'></i> Portfolio
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className={activeNav==='#contact'? 'nav__link active-link': 'nav__link'} onClick={()=>setActiveNav("#contact")}>
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
            <li className='nav__item'>
              <a href='login' className='nav__link' >
                <i className='uil uil-user-circle nav__icon'></i> Login
              </a>
            </li>
          </ul>

          <i className='uil uil-times nav__close' onClick={()=>showMenu(!Toggle)}></i>
        </div>

        <div className='nav__toggle'>
          <i className='uil uil-apps' onClick={()=>showMenu(!Toggle)}></i>
        </div>

        
      </nav>
    </header>
  )
}

export default Header
