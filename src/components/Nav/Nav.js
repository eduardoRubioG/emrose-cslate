import React, { useEffect } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll' 
import "./Nav.scss"

const  MyNav = () => { 
  const toggleClass = (element, stringClass) => {
		if(element.classList.contains(stringClass))
			element.classList.remove(stringClass);
		else
			element.classList.add(stringClass);
  }

  const closeMenu = () => { 
    console.log("closing the menu")
    toggleClass(document.querySelector('body'), 'nav-active'); 
  }
  
  useEffect(() => {
		const body = document.querySelector('body');
    const menu = document.querySelector('.menu-icon');
    menu.addEventListener('click', () => {
      toggleClass(body, 'nav-active');
    });
  },[]);

  console.log("this is being loaded"); 
  return (
    <>
      <div className="menu-icon">
      <span className="menu-icon__line menu-icon__line-left"></span>
      <span className="menu-icon__line"></span>
      <span className="menu-icon__line menu-icon__line-right"></span>
    </div>
    <div className="nav">
      <div className="nav__content">
        <ul className="nav__list">
          <li className="nav__list-item">
          <ScrollLink
            to='section__home'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {closeMenu()}}
          >
            Home
          </ScrollLink></li>
          <li className="nav__list-item g-link"><GatsbyLink to='/about/' onClick={() => {closeMenu()}}>About</GatsbyLink></li>
          <li className="nav__list-item g-link"><GatsbyLink to='/portfolio/' onClick={() => {closeMenu()}}>Portfolio</GatsbyLink></li>
          <li className="nav__list-item g-link"><GatsbyLink to='/journal/' onClick={() => {closeMenu()}}>Journal</GatsbyLink></li>
          <li className="nav__list-item" >
          <ScrollLink
            to='section__contact-me'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {closeMenu(); }}
          >
            Contact
          </ScrollLink></li>
        </ul>
      </div>
    </div>
    </>
  )
}
export default MyNav; 