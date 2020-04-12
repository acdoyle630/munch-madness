import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./TopNav.jss";
import { AppBar, Toolbar } from "@material-ui/core";

class TopNav extends Component {
  render() {
    const { CityAliasName, State } = this.props.location;
    return this.props.showTopNav ? (
      <AppBar position="fixed" style={style.topNav}>
        <Toolbar>{CityAliasName && `${CityAliasName}, ${State}`}</Toolbar>
      </AppBar>
    ) : (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    showTopNav: state.showTopNav,
  };
};

export default connect(mapStateToProps)(TopNav);
