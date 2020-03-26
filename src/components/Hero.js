import React, { Component } from 'react'

import HeroTitle from './HeroTitle/HeroTitle'

export default class Hero extends Component {
  state = { 
  }

  render() {
    return (
      <div className="container">
        <HeroTitle />
        <h1>Hello</h1>
      </div>
    )
  }
}