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
  renderInput({ input, label, type }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} type={type} />
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
        <div className="field">
          <label>Enter category</label>
          <Field name="category" component="select">
            <option value=""></option>
            {categories.map((categoryOption) => (
              <option value={categoryOption} key={categoryOption}>
                {categoryOption}
              </option>
            ))}
          </Field>
        </div>
        <div className="field">
          <label>Enter Brand</label>
          <Field name="brand" component="select">
            <option value=""></option>
            {brands.map((brandOption) => (
              <option value={brandOption} key={brandOption}>
                {brandOption}
              </option>
            ))}
          </Field>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "shoeCreate",
})(ShoeCreate);
