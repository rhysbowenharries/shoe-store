import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class EmailForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="name" component={this.renderInput} label="Enter Name" />

        <Field
          name="email"
          type="email"
          component={this.renderInput}
          label="email"
        />

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "Please Select a name";
  }
  if (!formValues.email) {
    errors.email = "Not a Valid Email";
  }
  return errors;
};
export default reduxForm({
  form: "emailForm",
  validate,
})(EmailForm);
