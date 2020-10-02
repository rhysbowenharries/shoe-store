import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchShoes, signOut } from "../../actions";

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

  renderSoldOut(shoe) {
    if (shoe.quantity === 0) {
      return <p className="ui right red label">sold out</p>;
    }
    if (shoe.quantity === 1) {
      return <p className="ui right blue label">only 1 left</p>;
    }
  }

  renderList() {
    return this.props.shoes.map((shoe) => {
      return (
        <div
          style={{
            padding: 2,
            margin: 6,
            border: 1,
            backgroundColor: "white",
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: 9,
          }}
          key={shoe._id}
        >
          <Link to={`/shoes/${shoe._id}`}>
            <i className="massive middle aligned images black icon" />
            <div className="ui content">
              <div className="desctiption">
                <h3 className="ui black header">{shoe.brand}</h3>
                <p>{shoe.title}</p>
                <p className="ui orange circular label"> £{shoe.price}</p>
                {this.renderSoldOut(shoe)}
              </div>
            </div>
          </Link>
          {this.renderAdmin(shoe)}
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.adminPrivileges) {
      return (
        <div className="fluid ui yellow button">
          <Link to="/AdminXp2Q/shoes/new">Add Product</Link>
        </div>
      );
    }
  }

  renderSignOut() {
    if (this.props.adminPrivileges) {
      return (
        <Link
          style={{ marginBottom: 20 }}
          to="/AdminXp2Q"
          className="fluid ui large blue vertical animated button"
          tabIndex="0"
        >
          <div className="visible content">Back to Admin Page</div>
          <div className="hidden content">
            <i className="user icon"></i>
          </div>
        </Link>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderSignOut()}
        <div
          className="ui relaxed grid container"
          style={{ justifyContent: "center" }}
        >
          <h2>ALL SHOES</h2>
          <div className="doubling eight column row">{this.renderList()}</div>
          {this.renderCreate()}
        </div>
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

export default connect(mapStateToProps, { fetchShoes, signOut })(ShoeList);
