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
        text: 'home'
      },
      {
        id:2,
        path:'/about',
        text: 'about'
      },
      {
        id:3,
        path:'/portfolio',
        text: 'portfolio'
      },
      {
        id: 4,
        path: '/journal',
        text: 'journal'
      },
      {
        id:5,
        path:'/contact',
        text: 'contact me'
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
                <li key={links.id} className="nav-item">
                  <Link to={links.path} className="nav-link">
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
