import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchShoe, deleteShoe } from "../../actions";

class ShoeDelete extends React.Component {
  componentDidMount() {
    this.props.fetchShoe(this.props.match.params.id);
  }

  renderActions() {
    return (
      <>
        <button
          onClick={() => this.props.deleteShoe(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/AdminXp2Q/Shoes/List" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.shoe) {
      return "Are you sure you want to Delete this Item?";
    }
    return `Are you sure you want to delete ${this.props.shoe.brand}: ${this.props.shoe.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Item"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/AdminXp2Q/Shoes/List")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { shoe: state.shoes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchShoe, deleteShoe })(ShoeDelete);
