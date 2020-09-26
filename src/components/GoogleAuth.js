import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "146734563398-gondf6kgf7b9b15b6c532s3rs1e3afmh.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="ui large red animated right floated button"
          tabIndex="0"
        >
          <div className="visible content">
            <i className="sign-out icon"></i>
          </div>
          <div className="hidden content">sign-out</div>
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className="fluid ui large blue vertical animated button"
          tabIndex="0"
        >
          <div className="visible content">sign-in</div>
          <div className="hidden content">
            <i className="sign-in icon"></i>
          </div>
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <h3 className="ui center aligned icon header">
          <i className="circular user icon"></i>
          Welcome Golden Shoe Employee
        </h3>
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
