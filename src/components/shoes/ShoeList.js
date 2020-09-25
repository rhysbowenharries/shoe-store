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
        <div className="three wide column">
          <div key={shoe._id}>
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
    return (
      <div className="ui grid">
        <div className="doubling eight column row">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { shoes: state.shoes };
};

export default connect(mapStateToProps, { fetchShoes })(ShoeList);
