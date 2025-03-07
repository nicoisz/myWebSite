import React from 'react'
import './scroll.css';


const Scroll = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollUp")
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll")

    })

  return (
      <button className="scrollUp">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </button>
      
  )
}

export default Scroll
