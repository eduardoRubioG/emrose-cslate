import React, { Component } from 'react'
import './Icons.css'

{/* <MyComponent somProp={['something']} /> */}
export default class SectionHeader extends Component {  
  constructor(props) { 
    super(props); 
    let _data = []; 
    props.icons.forEach((e, i) => {
      const obj = { 
        icon: e, 
        iconColors: props.iconColors[i],
        iconSizes: `md-${props.iconSizes[i]}`
      }; 
      _data.push(obj); 
    });
    const iconList = _data.map((e, i) => { 
      console.log(e, "here"); 
      const _class = `material-icons ${e.iconSizes} ${e.iconColors} icon`
      console.log(_class, "Will this work?")
      return(
      <li key={i}>
        <i className={_class}>{e.icon}</i>
      </li>
      );
    })
    this.state = {iconData: iconList}; 
  }
  
  render() { 
    return (
      <div className="icon-container">
        {this.state.iconData}
      </div>
    )
  };
}