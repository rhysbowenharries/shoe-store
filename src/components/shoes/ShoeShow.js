import React from "react";
import { connect } from "react-redux";
import { fetchShoe } from "../../actions";
import "../css/imageSlider.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
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
        <ImageGallery items={images} />
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
