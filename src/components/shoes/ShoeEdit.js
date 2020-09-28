import React from "react";
import { connect } from "react-redux";
import { fetchShoe } from "../../actions";

class ShoeEdit extends React.Component {
  componentDidMount() {
    this.props.fetchShoe(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    if (!this.props.shoe) {
      return <div>loading ...</div>;
    }
    return <div>{this.props.shoe.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { shoe: state.shoes[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchShoe })(ShoeEdit);
