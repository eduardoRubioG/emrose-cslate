// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from 'react';
import './Form.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        className="form__container"
        onSubmit={this.submitForm}
        action="https://formspree.io/xknqzlbp"
        method="POST"
      >
        <div className="form__input-wrapper">
          <input type="text" name="name" placeholder="Name"/>
        </div>
        <div className="form__input-wrapper">
          <input type="email" name="email" placeholder="Email"/>
        </div>
        <div className="form__input-wrapper">
          <input type="tel" name="phone" placeholder="Phone Number"/>
        </div>
          <textarea 
          name="message" 
          placeholder="Message" 
          id="form__message-box"
          data-gramm="false"
          ></textarea>
        {status === "SUCCESS" ? <p>Thanks!</p> : 
          <div className="form__submit-button-wrapper">
            <button className="form__submit-button">Send</button>
          </div>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}