import React from "react";
import { connect } from "react-redux";
import history from "../history";
import {
  getPrice,
  removeItem,
  increaseShoeQuantity,
  checkoutRender,
  addPaymentDetails,
} from "../actions";
import EmailForm from "./EmailForm";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  componentDidMount() {
    this.props.getPrice();
  }

  onRemoveFromCartClick(shoe) {
    this.props.increaseShoeQuantity(shoe);
    this.props.removeItem(shoe);
    this.props.getPrice();
  }

  createTransaction() {
    console.log("cart 5 seconds", this.props.cart);
  }

  onSubmit = (formValues) => {
    this.props.addPaymentDetails(formValues);
    setTimeout(() => {
      this.createTransaction();
    }, 2000);
    history.push("/saleconfirmation");
  };
  renderCheckout() {
    if (this.props.cart.checkoutRender === false) {
      return (
        <button
          onClick={() => this.props.checkoutRender(true)}
          className="ui primary button"
        >
          Proceed to Checkout
        </button>
      );
    }
    return <EmailForm onSubmit={this.onSubmit} />;
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
    if (this.props.cart.total === 0) {
      return (
        <div>
          <h3>Your Shopping Cart Is Empty</h3>
          <Link className="ui green button" to={"/shoes/list"}>
            Continue Shopping
          </Link>
        </div>
      );
    }
    return (
      <div>
        {this.renderList()}
        <h2>Total: £{this.props.cart.total}</h2>
        {this.renderCheckout()}
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
  checkoutRender,
  addPaymentDetails,
})(Checkout);
