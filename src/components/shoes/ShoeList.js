import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchShoes } from "../../actions";

class ShoeList extends React.Component {
  componentDidMount() {
    this.props.fetchShoes();
  }

  renderAdmin(shoe) {
    if (this.props.adminPrivileges) {
      return (
        <div className="content">
          <Link to={`/AdminXp2Q/Shoes/edit/${shoe._id}`} className="ui button ">
            Edit
          </Link>
          <Link
            to={`/AdminXp2Q/Shoes/delete/${shoe._id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.shoes.map((shoe) => {
      return (
        <Link
          to={`/shoes/${shoe._id}`}
          key={shoe._id}
          style={{
            padding: 2,
            margin: 2,
            border: 1,
            backgroundColor: "white",
            borderStyle: "solid",
            borderColor: "black",
          }}
        >
          <i className="massive middle aligned images black icon" />
          <div className="ui content">
            <div className="desctiption">
              <h3 className="ui black header">{shoe.brand}</h3>
              <p>{shoe.title}</p>
              <p>
                <strong className="ui orange label">£{shoe.price}</strong>
              </p>
              {this.renderAdmin(shoe)}
            </div>
          </div>
        </Link>
      );
    });
  }

  renderCreate() {
    if (this.props.adminPrivileges) {
      return (
        <div className="fluid ui yellow button">
          <Link to="/shoes/new">Add Product</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ui grid container">
        <h2>ALL SHOES</h2>
        <div className="doubling eight column row">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // delete state.shoes.undefined;
  return {
    shoes: Object.values(state.shoes),
    adminPrivileges: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchShoes })(ShoeList);
