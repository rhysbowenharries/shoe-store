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
        <div className="content" style={{ margin: 1 }}>
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
    return this.props.shoes.map((shoe, index) => {
      return (
        <div
          style={{
            padding: 1,
            margin: 5,
            border: 1,
            backgroundColor: "white",
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: 5,
          }}
          key={shoe._id}
        >
          <Link to={`/shoes/${shoe._id}`}>
            <img
              src={`https://source.unsplash.com/collection/4387572/126x112?sig=${index}`}
            />
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
        <Link className="fluid ui yellow button" to="/AdminXp2Q/shoes/new">
          <div className="">Add Product</div>
        </Link>
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
          style={{ justifyContent: "center", marginTop: 10 }}
        >
          <h2>ALL SHOES</h2>
          <div style={{ maxWidth: 1000 }} className="doubling eight column row">
            {this.renderList()}
          </div>
          {this.renderCreate()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoes: Object.values(state.shoes),
    adminPrivileges: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchShoes, signOut })(ShoeList);
