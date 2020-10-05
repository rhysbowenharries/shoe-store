import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="ui top fixed massive yellow inverted menu">
        <div>
          <Link to="/" className="active item" style={{ whiteSpace: "nowrap" }}>
            THE GOLDEN SHOE
          </Link>
        </div>
        <div
          className="content-to-hide"
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 3,
          }}
        >
          <div className="ui small category search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search shoes..."
              />
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </div>
        <div className="right menu">
          <Link to="/shoes/list" className="active item">
            Products
          </Link>
          <Link
            to="/checkout"
            className="ui yellow icon button"
            style={{ paddingTop: 20, marginLeft: 2 }}
          >
            <i className="shopping cart black icon"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
