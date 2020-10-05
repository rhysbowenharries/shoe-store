import React, { Component } from "react";
import { connect } from "react-redux";

const ID = () => {
  return Math.random().toString(36).substr(2, 9).toUpperCase();
};
const date = new Date().toLocaleString().split(",")[0];

class SaleConfirmation extends Component {
  renderList() {
    return this.props.cart.addedItems.map((item) => {
      return (
        <div key={item.title}>
          <p>
            {item.brand}: {item.title}
          </p>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>Thank You For Your Order</h1>
        <p>Order Number: {ID()}</p>
        <p>Oreder Date: {date}</p>
        <p>Items Ordered:</p>
        {this.renderList()}
        <h3>Order Total: {this.props.cart.total}</h3>
        <p>
          Please save this information for reference, a confirmation will be
          sent to {this.props.cart.paymentDetails.email}. Please allow up to 24
          hours for us to process your order for shipment
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(SaleConfirmation);
