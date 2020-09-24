import React from "react";
import { connect } from "react-redux";
import { fetchShoes } from "../actions";
import faker from "faker";

class ShoeList extends React.Component {
  componentDidMount() {
    this.props.fetchShoes();
  }

  renderList() {
    return this.props.shoes.map((shoe) => {
      return (
        <div classname="ui four column doubling stackable grid container">
          <div className="column" key={shoe._id}>
            <i className="massive middle aligned images icon" />
            <div className="content">
              <div className="desctiption">
                <h3>{shoe.brand}</h3>
                <p>{shoe.title}</p>
                <p>
                  <strong>£{shoe.price}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui relaxed divided list"> {this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { shoes: state.shoes };
};

export default connect(mapStateToProps, { fetchShoes })(ShoeList);
