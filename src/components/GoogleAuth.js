import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button
          onClick={this.onSignOut}
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
          onClick={this.onSignIn}
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
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
