import "../css/imageSlider.css";
import React from "react";
import history from "../../history";
import { connect } from "react-redux";
import { fetchShoe, addToCart, lowerShoeQuantity } from "../../actions";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://d2ob0iztsaxy5v.cloudfront.net/product/342588/3425887750m1_zm.jpg",
    thumbnail:
      "https://d2ob0iztsaxy5v.cloudfront.net/product/342588/3425887750m1_lg.jpg",
  },
  {
    original:
      "https://d2ob0iztsaxy5v.cloudfront.net/product/342588/3425887750m4_zm.jpg",
    thumbnail:
      "https://d2ob0iztsaxy5v.cloudfront.net/product/342588/3425887750m4_lg.jpg",
  },
  {
    original:
      "https://d2ob0iztsaxy5v.cloudfront.net/product/342588/3425887750m7_zm.jpg",
    thumbnail:
      "https://d2ob0iztsaxy5v.cloudfront.net/product/342588/3425887750m7_zm.jpg",
  },
];

class ShoeShow extends React.Component {
  componentDidMount() {
    this.props.fetchShoe(this.props.match.params.id);
  }

  onAddtoCartClick(shoe) {
    this.props.lowerShoeQuantity(shoe);
    this.props.addToCart(shoe);
    history.push("/success");
  }

  onBuyNowClick(shoe) {
    this.props.lowerShoeQuantity(shoe);
    this.props.addToCart(shoe);
    history.push("/checkout");
  }

  renderBuyButtons() {
    if (this.props.shoe.quantity > 1) {
      return (
        <>
          <button
            onClick={() => this.onAddtoCartClick(this.props.shoe)}
            className="ui button "
          >
            Add to Cart
          </button>
          <button
            onClick={() => this.onBuyNowClick(this.props.shoe)}
            className="ui button primary"
          >
            Buy Now
          </button>
        </>
      );
    }
    if (this.props.shoe.quantity === 1) {
      return (
        <>
          <button
            onClick={() => this.onAddtoCartClick(this.props.shoe)}
            className="ui button "
          >
            Add to Cart
          </button>
          <button
            onClick={() => this.onBuyNowClick(this.props.shoe)}
            className="ui button orange"
          >
            Buy Now HURRY ONLY ONE LEFT!
          </button>
        </>
      );
    } else {
      return (
        <button className="ui red button ">
          Sold Out, Click here for Back in Stock Alerts!
        </button>
      );
    }
  }

  render() {
    if (!this.props.shoe) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          <>
            <h1>
              {this.props.shoe.brand}: {this.props.shoe.title}
            </h1>
            <h2>£{this.props.shoe.price}</h2>
          </>
        </div>
        <div
          className="ui buttons"
          style={{ paddingTop: 10, paddingBottom: 10 }}
        >
          {this.renderBuyButtons(this.props.shoe)}
        </div>
        <div className="show-show-image-slider">
          <ImageGallery items={images} />
        </div>
        <p>
          {this.props.shoe.description}. Built sturdy for a supportive ride,{" "}
          {this.props.shoe.brand} deliver the skate-inspired All Coasts 574
          profile. On-trend mustard N branding adorns the navy suede upper for a
          street-worthy look which will see you right from the street to the
          skate park.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { shoe: state.shoes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchShoe,
  addToCart,
  lowerShoeQuantity,
})(ShoeShow);
