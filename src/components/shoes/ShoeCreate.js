import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createShoe } from "../../actions";

const brands = ["Nike", "Hushpuppy", "Mona Lisa", "Kickers"];
const categories = [
  "M sports",
  "M evening",
  "M casual",
  "M slippers",
  "M Sandles",
  "W sports",
  "W evening",
  "W casual",
  "W slippers",
  "Heels",
  "Pumps",
];

class ShoeCreate extends React.Component {
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

  renderSelectInput = ({ input, label, type, meta, children }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <select {...input} type={type}>
          {children}
        </select>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createShoe(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Name" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <Field
          name="price"
          type="number"
          component={this.renderInput}
          label="Enter Price"
        />
        <Field
          name="quantity"
          type="number"
          component={this.renderInput}
          label="Enter Quantity"
        />

        <Field
          name="category"
          label="Enter Category"
          component={this.renderSelectInput}
        >
          <option value=""></option>
          {categories.map((categoryOption) => (
            <option value={categoryOption} key={categoryOption}>
              {categoryOption}
            </option>
          ))}
        </Field>

        <Field
          name="brand"
          label="Enter Brand"
          component={this.renderSelectInput}
        >
          <option value=""></option>
          {brands.map((brandOption) => (
            <option value={brandOption} key={brandOption}>
              {brandOption}
            </option>
          ))}
        </Field>

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please Enter A Name ";
  }
  if (!formValues.description) {
    errors.description = "Please Enter A Description";
  }
  if (isNaN(Number(formValues.price))) {
    errors.price = "Please Enter A Price";
  }
  if (isNaN(Number(formValues.quantity))) {
    errors.quantity = "Please Select a quantity";
  }
  if (!formValues.category) {
    errors.category = "Please Select a Category";
  }
  if (!formValues.brand) {
    errors.brand = "Please Select a Brand";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "shoeCreate",
  validate,
})(ShoeCreate);

export default connect(null, { createShoe })(formWrapped);
