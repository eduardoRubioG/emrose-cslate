import React, { Component } from 'react'
import './Icons.css'
import { array } from 'prop-types';


{/* <MyComponent somProp={['something']} /> */}
export default class SectionHeader extends Component {
  componentDidMount(){ 
    this.props.icons.forEach(e => {
      console.log(e);
    });
  }

  render() { 
    let id = 0; 
    const iconList = this.props.icons.map((e) => { 
      return(
      <li key={id}>
        <i className="material-icons">{e}</i>
      </li>
      );
    })
    id++; 

    return (
      <div>
        {iconList}
      </div>
    )
  };
}