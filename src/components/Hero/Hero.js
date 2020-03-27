import React, { Component } from 'react'

import HeroTitle from '../HeroTitle/HeroTitle'
import './Hero.css'

export default class Hero extends Component {
  state = { 
  }

  render() {
    return (
      <div className="container">
        <HeroTitle />
        <h4 id="hero-header">Creative Productions Based in Atlanta</h4>
      </div>
    )
  }
}