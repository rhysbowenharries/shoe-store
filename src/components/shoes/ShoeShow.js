import React from "react";
import { connect } from "react-redux";
import { fetchShoe } from "../../actions";

class ShoeShow extends React.Component {
  componentDidMount() {
    this.props.fetchShoe(this.props.match.params.id);
  }

  render() {
    if (!this.props.shoe) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{this.props.shoe.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { shoe: state.shoes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchShoe })(ShoeShow);
