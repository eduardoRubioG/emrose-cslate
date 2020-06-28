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
      <div class="menu-icon">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>

    <div class="nav">
      <div class="nav__content">
        <ul class="nav__list bd">
          <li class="nav__list-item">Home</li>
          <li class="nav__list-item">About</li>
          <li class="nav__list-item">Portfolio</li>
          <li class="nav__list-item">Journal</li>
          <li class="nav__list-item">Contact</li>
        </ul>
      </div>
    </div>
    </>
  )
}
export default MyNav; 