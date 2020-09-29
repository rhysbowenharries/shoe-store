import React from "react";
import { connect } from "react-redux";
import { createShoe } from "../../actions";
import ShoeForm from "./ShoeForm";

class ShoeCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createShoe(formValues);
  };

  render() {
    return (
      <div>
        <h3>Add a New Product</h3>
        <ShoeForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createShoe })(ShoeCreate);
