// import React, { useEffect } from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link as GatsbyLink } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import "./Nav.scss"

import React, { Component } from "react"

export default class Nav extends Component {
  constructor() {
    super()
    this.closeMenu = this.closeMenu.bind(this)
    this.state = {
      active: false,
      linkData: [
        {
          content: 'home',
          path: '/#section__home',
          title: 'Navigate home',
          stripHash: true, 
        },
        {
          content: 'about',
          path: '/about/',
          title: 'Navigate to about page', 
          stripHash: false, 
        }, 
        {
          content: 'portfolio',
          path: '/portfolio/',
          title: 'Navigate to portfolio', 
          stripHash: false, 
        }, 
        {
          content: 'journal',
          path: '/journal/',
          title: 'Navigate to journal', 
          stripHash: false, 
        }, 
        {
          content: 'contact',
          path: '/#section__contact-me',
          title: 'Navigate to contact section', 
          stripHash: true, 
        }, 
      ]
    }
  }

  /* function to toggle the menu being open when a nav link is clicked */ 
  closeMenu() {
    this.setState(state => ({ active: !state.active }))
  }

  render() {
    const menuIconStateClass = this.state.active ? " menu-icon-active" : ""
    const navStateClass = this.state.active ? " nav-active" : ""

    return (
      <>
        <div
          className={`menu-icon${menuIconStateClass}`}
          onClick={() => this.closeMenu(false)}
        >
          <span className="menu-icon__line menu-icon__line-left"></span>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line menu-icon__line-right"></span>
        </div>
        <div className={navStateClass}>
          <div className="nav">
            <div className="nav__content">
              <ul className="nav__list">
              {this.state.linkData.map((link) => { 
                return(
                  <li className="nav__list-item" key={link.path}>
                    <span onClick={() => {this.closeMenu()}}>
                      <AnchorLink to={link.path} title={link.title} stripHash={link.stripHash}>
                        {link.content.toUpperCase()}
                      </AnchorLink>
                    </span>
                  </li>
                )
              })}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}
