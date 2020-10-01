import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui top fixed massive menu">
      <Link to="/" className="item">
        THE GOLDEN SHOE
      </Link>
      <div className="right menu">
        <Link to="/shoes/list" className="item">
          Women's | Men's
        </Link>
      </div>
    </div>
  );
};

export default Header;
