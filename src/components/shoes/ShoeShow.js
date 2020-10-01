import "../css/imageSlider.css";
import React from "react";
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
        <div className="show-show-image-slider">
          <ImageGallery items={images} />
        </div>
        <h1>{this.props.shoe.title}</h1>
        <p>By:</p>
        <p>{this.props.shoe.brand}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { shoe: state.shoes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchShoe })(ShoeShow);
