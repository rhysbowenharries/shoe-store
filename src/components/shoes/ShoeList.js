import React from "react";
import { connect } from "react-redux";
import { fetchShoes } from "../../actions";

class ShoeList extends React.Component {
  componentDidMount() {
    this.props.fetchShoes();
  }

  renderList() {
    return this.props.shoes.map((shoe) => {
      return (
        <div key={shoe._id} className="three wide column">
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
      );
    });
  }
  render() {
    return (
      <div className="ui grid">
        <h2>ALL SHOES</h2>
        <div className="doubling eight column row">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { shoes: Object.values(state.shoes) };
};

export default connect(mapStateToProps, { fetchShoes })(ShoeList);
