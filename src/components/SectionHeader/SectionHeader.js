import React, { Component } from 'react'
import './SectionHeader.css'

export default class SectionHeader extends Component { 
  render() { 
    return( 

      <div className="sh-container">
        <h2>{this.props.title}</h2>
        <svg className="bar" width="225" height="5" viewBox="0 0 225 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="75" y1="2" x2="150" y2="2" stroke="#F7BCBB" strokeWidth="5"/>
          <line y1="2" x2="75" y2="2" stroke="#F0EAD6" strokeWidth="5"/>
          <line x1="150" y1="2" x2="225" y2="2" stroke="#D3827F" strokeWidth="5"/>
        </svg>
        <h4 className="content"> {this.props.content} </h4>
      </div>
    )
  };
}