import React, { Component } from "react";
import EmailForm from "./EmailForm";

export default class NewsletterSignup extends Component {
  render() {
    return (
      <div>
        <h1>Sign up to our Newsletter!</h1>
        <EmailForm></EmailForm>
      </div>
    );
  }
}
