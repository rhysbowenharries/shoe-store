import "../css/imageSlider.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchShoe } from "../../actions";
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

  render() {
    if (!this.props.shoe) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          <h1>
            {this.props.shoe.brand}: {this.props.shoe.title}
            <h2>£{this.props.shoe.price}</h2>
          </h1>
        </div>
        <div
          className="ui centered buttons"
          style={{ paddingTop: 10, paddingBottom: 10 }}
        >
          <Link to={`/`} className="ui button ">
            Add to Cart
          </Link>
          <Link to={`/`} className="ui button primary">
            Buy Now
          </Link>
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

export default connect(mapStateToProps, { fetchShoe })(ShoeShow);
