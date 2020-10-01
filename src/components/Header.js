import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="ui top fixed massive yellow inverted menu">
        <div>
          <Link to="/" className="active item">
            THE GOLDEN SHOE
          </Link>
        </div>
        <div className="right menu">
          <Link to="/shoes/list" className="active item">
            Women's | Men's
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
