import React, { Component } from 'react'
import {Link} from 'gatsby'
import Logo from '../images/gatsby-icon.png'

export default class Navbar extends Component {
  state = { 
    OpenNB: false, 
    navcollapse: 'collapse navbar-collapse ',
    links: [
      {
        id:1,
        path:'/',
        text: 'Home'
      },
      {
        id:2,
        path:'/about',
        text: 'About'
      },
      {
        id:3,
        path:'/portfolio',
        text: 'Portfolio'
      },
      {
        id:4,
        path:'/contact',
        text: 'Contact Me'
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
              return(
                <li key={links.key} className="nav-item">
                  <Link to={links.path} className="nav-link text-capitalize">
                    {links.text}
                  </Link> 
                </li>
              )
            })
          }</ul>
        </div>
      </nav>
    )
  }
}
