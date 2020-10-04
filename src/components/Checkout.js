import React from "react";
import { connect } from "react-redux";
import { getPrice, removeItem, increaseShoeQuantity } from "../actions";

class Checkout extends React.Component {
  componentDidMount() {
    this.props.getPrice();
  }

  onRemoveFromCartClick(shoe) {
    console.log(shoe);
    this.props.increaseShoeQuantity(shoe);
    this.props.removeItem(shoe);
    this.props.getPrice();
  }

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
          <div className="circular ui right floated button">
            <button
              onClick={() => this.onRemoveFromCartClick(shoe)}
              className="circular ui icon button"
            >
              <i className="red close icon"></i>
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
    return (
      <div>
        {this.renderList()}
        <h2>Total: £{this.props.cart.total}</h2>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps, {
  getPrice,
  removeItem,
  increaseShoeQuantity,
})(Checkout);
