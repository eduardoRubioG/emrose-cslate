import React from 'react'
import Form from '../Form/Form'
import './ContactSection.css'

export default function ContactSection(props) { 
  return (
    <div className="ContactSection__container">
    <p className="ContactSection__content">{props.content ? props.content : "Don't be afraid to reach out!"}</p>
     <div className="ContactSection__form-wrapper">
        <Form />
      </div>
      <div className="ContactSection__contact-info">
        <div className="ContactSection__info-stub">
          <i className="material-icons secondary contact-icon md-24">alternate_email</i>
          <p>emily.marosek@gmail.com</p>
        </div>
        <div className="ContactSection__info-stub">
          <i className="material-icons secondary contact-icon md-24">phone</i>
          <p>(404)-980-7101</p>
        </div>
        <div className="ContactSection__info-stub">
          <i className="material-icons secondary contact-icon md-24">location_on</i>
          <p>Atlanta, GA</p>
        </div>
        <div className="ContactSection__socials">
          <a href="https://www.facebook.com/emmarosecreative" className="fa fa-facebook"></a>
          <a href="https://www.instagram.com/emma_rose_creative/" className="fa fa-instagram"></a>
        </div>
      </div>
    </div>
  )
}
