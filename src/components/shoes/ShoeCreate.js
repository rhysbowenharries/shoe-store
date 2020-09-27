import React from "react";
import { Field, reduxForm } from "redux-form";

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
  renderInput({ input, label, type, meta }) {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} type={type} />
        <div>{meta.error}</div>
      </div>
    );
  }

  renderSelectInput({ input, label, type, meta, children }) {
    return (
      <div className="field">
        <label>{label}</label>
        <select {...input} type={type}>
          {children}
        </select>
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
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
  if (isNaN(Number(formValues.price))) {
    errors.category = "Please Select a Category";
  }
  if (!formValues.brand) {
    errors.brand = "Please Select a Brand";
  }
  return errors;
};

export default reduxForm({
  form: "shoeCreate",
  validate,
})(ShoeCreate);
