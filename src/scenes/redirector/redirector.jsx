import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Redirector extends Component {
  redirectTo = () => {
    return (
      <Redirect
        to={{
          pathname: this.props.redirectTo || "home",
        }}
      />
    );
  };
  render() {
    return this.redirectTo();
  }
}

const mapStateToProps = (state) => {
  return {
    redirectTo: state.redirectTo,
  };
};

export default connect(mapStateToProps)(Redirector);
