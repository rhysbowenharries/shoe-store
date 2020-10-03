import React from "react";
import { connect } from "react-redux";

class Checkout extends React.Component {
  renderList() {
    return this.props.cart.addedItems.map((shoe) => {
      return (
        <div
          style={{
            padding: 3,
            margin: 2,
            border: 1,
            backgroundColor: "#e0e1e2",
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: 5,
          }}
          key={shoe._id}
        >
          <div class="circular ui right floated button">
            <button class="circular ui icon button">
              <i class="red close icon"></i>
            </button>
          </div>
          <h3 className="ui black header">{shoe.brand}</h3>
          <p>{shoe.title}</p>
          <p className="ui orange circular label"> £{shoe.price}</p>
        </div>
      );
    });
  }

  render() {
    if (!this.props.cart) {
      return <div>loading ...</div>;
    }
    return <div>{this.renderList()}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, {})(Checkout);
