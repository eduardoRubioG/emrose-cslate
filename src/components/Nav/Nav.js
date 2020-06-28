import React, { useEffect } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll' 
import "./MyNav.css"

const  MyNav = () => {

  function closeMobileMenu() {
    const navLinks = document.querySelector(".navbar__items"); 
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log(width); 
    if( width < 620 ) { navLinks.classList.toggle("open"); }
  }

  function toggleScrollAbility() { 
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if( width < 620 ) {
    const body = document.querySelector("body"); 
    const html = document.querySelector("html"); 
    body.classList.toggle("no-scroll");
    html.classList.toggle("no-scroll");
    }
  }

  useEffect(() => {
    const hamburger = document.querySelector(".navbar__hamburger"); 
    const navLinks = document.querySelector(".navbar__items"); 
    const links = document.querySelectorAll(".navbar__items li");
    hamburger.addEventListener("click", () => { 
      navLinks.classList.toggle("open");
      toggleScrollAbility(); 
    });
  },[]);
  
 

  console.log("this is being loaded"); 
  return (
    <nav className="_navbar">
      <div className="navbar__hamburger">
        <div className="navbar__hamburger-line"/>
        <div className="navbar__hamburger-line"/>
        <div className="navbar__hamburger-line"/>
      </div> 
      <ul className="navbar__items">
        <li>
        <ScrollLink
          to="section__home"
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
          onClick={()=>{
              closeMobileMenu();
              toggleScrollAbility(); 
            }}
        >
          home
        </ScrollLink>
        </li>
        <GatsbyLink to="/about" className="navbar__gatsby-link">
          <li>about</li>
        </GatsbyLink>
        <GatsbyLink to="/portfolio" className="navbar__gatsby-link">
          <li>portfolio</li>
        </GatsbyLink>
        <GatsbyLink to="/journal" className="navbar__gatsby-link">
          <li>journal</li>
        </GatsbyLink>
        <li>
          <ScrollLink
            activeClass="active"
            to="section__contact-me"
            spy={false}
            smooth={true}
            offset={0}
            duration={500}
            onClick={()=>{
              closeMobileMenu();
              toggleScrollAbility(); 
            }}
          >
            contact
          </ScrollLink>
        </li>
      </ul> 
    </nav>
  )
}

export default MyNav; 