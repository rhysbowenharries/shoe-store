import React from "react";
import { Field, reduxForm } from "redux-form";

class ShoeCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Name" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "shoeCreate",
})(ShoeCreate);
