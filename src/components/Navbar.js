import React, { Component } from 'react'
import {Link} from 'gatsby'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import Logo from '../images/gatsby-icon.png'

export default class Navbar extends Component {
  state = { 
    OpenNB: false, 
    navcollapse: 'collapse navbar-collapse ',
    links: [
      {
        id:1,
        path:'/',
        text: 'home',
        scroller: true, 
      },
      {
        id:2,
        path:'/about',
        text: 'about', 
        scroller: true, 
      },
      {
        id:3,
        path:'/portfolio',
        text: 'portfolio', 
        scroller: false, 
      },
      {
        id: 4,
        path: '/journal',
        text: 'journal',
        scroller: false, 
      },
      {
        id:5,
        path:'/contact',
        text: 'contact me', 
        scroller: true, 
      },
    ],
  }

  navbarHandler = () => {
    this.state.OpenNB ? 
      this.setState({OpenNB: false, navcollapse: "collapse navbar-collapse"}) :
      this.setState({OpenNB: true, navcollapse: "navbar navbar-collapse show"});
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark border-bottom border-dark">
        {/* <a class="navbar-brand" href="#">Emma Rose Creative</a> */}
        {/* <Link to="/" className="navbar-brand"></Link> */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}>
            <span className="navbar-toggler-icon"/>
        </button>
        <div className={this.state.navcollapse}>
          <ul className="navbar-nav mx-auto">{
            this.state.links.map(links=>{
                if( links.scroller ){
                  return(
                  <li key={links.id} className="nav-item">
                    <ScrollLink
                      activeClass=""
                      to="section__contact-me"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {links.text}
                    </ScrollLink>
                  </li>
                  )
                } else {
                  return(
                  <li key={links.id} className="nav-item">
                  <Link to={links.path} className="nav-link">
                    {links.text}
                  </Link> 
                </li>
                  )
                }
            })
          }</ul>
        </div>
      </nav>
    )
  }
}
