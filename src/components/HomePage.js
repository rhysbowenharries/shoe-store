import "./css/imageSlider.css";
import React from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

const smart =
  "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=940";
const golden =
  "https://images.pexels.com/photos/977908/pexels-photo-977908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=940";
const trainers =
  "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=940";
const images = [
  {
    original: smart,
    thumbnail: smart,
  },
  {
    original: golden,
    thumbnail: golden,
  },
  {
    original: trainers,
    thumbnail: trainers,
  },
];

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <ImageGallery items={images} />
        <div className="ui large images" style={{ textAlign: "center" }}>
          <img
            src={require("../images/student.jpg")}
            alt="20% student discount"
            className="ui image"
          />
          <Link to="/signup">
            <img
              src={require("../images/newsletter.jpg")}
              alt="10% discount if you join our newsletter"
              className="ui image"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
