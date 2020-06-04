import React, { Component } from 'react'
import './SectionHeader.css'

export default class SectionHeader extends Component { 
  render() { 
    return( 

      <div className="sh-container">
        <h1>{this.props.title}</h1>
        <svg className="bar" width="225" height="4" viewBox="0 0 225 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="75" y1="2" x2="150" y2="2" stroke="#F7BCBB" stroke-width="4"/>
          <line y1="2" x2="75" y2="2" stroke="#F0EAD6" stroke-width="4"/>
          <line x1="150" y1="2" x2="225" y2="2" stroke="#D3827F" stroke-width="4"/>
        </svg>
      </div>
    )
  };
}