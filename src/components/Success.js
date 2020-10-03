import React from "react";
import { Link } from "react-router-dom";

class Success extends React.Component {
  render() {
    return (
      <div style={{ margin: 20, padding: 20 }}>
        <h2>Success!!!</h2>
        <Link className="ui blue button" to={"/shoes/list"}>
          Back to Products
        </Link>
      </div>
    );
  }
}

export default Success;
