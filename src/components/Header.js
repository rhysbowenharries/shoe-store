import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        THE GOLDEN SHOE
      </Link>
      <div className="right menu">
        <Link to="/shoes/list" className="item">
          Womens | Mens
        </Link>
      </div>
    </div>
  );
};

export default Header;
