import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchShoe, editShoe } from "../../actions";
import ShoeForm from "./ShoeForm";

class ShoeEdit extends React.Component {
  componentDidMount() {
    this.props.fetchShoe(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editShoe(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.shoe) {
      return <div>loading ...</div>;
    }
    return (
      <div>
        <h3>Edit Product</h3>
        <ShoeForm
          initialValues={_.pick(
            this.props.shoe,
            "brand",
            "category",
            "description",
            "price",
            "quantity",
            "title"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { shoe: state.shoes[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchShoe, editShoe })(ShoeEdit);
