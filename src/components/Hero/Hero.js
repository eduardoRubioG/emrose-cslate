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
        <section className="hero-descriptor">
          <h4 id="hero-header">Creative Productions Based in Atlanta</h4>
          <h5>Et nulla elit consectetur dolore sint non veniam Lorem ea duis duis et pariatur.</h5>
          <button
            id="hero-button"
            type="button"
            className="btn btn-light"
            >See my works</button>
        </section>
      </div>
    )
  }
}