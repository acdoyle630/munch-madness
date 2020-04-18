import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./TopNav.jss";
import { AppBar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

class TopNav extends Component {
  render() {
    const { MixedCaseCity, State } = this.props.location;
    return this.props.showTopNav ? (
      <AppBar position="fixed" style={style.topNav}>
        <div style={style.toolBar}>
          <div
            style={style.phase}
            onClick={() => {
              console.log("CLICKED");
            }}
          >
            <ArrowBackIosIcon />
            {this.props.phase}
          </div>
          <div style={style.location}>
            {MixedCaseCity && `${MixedCaseCity}, ${State}`}
          </div>
        </div>
      </AppBar>
    ) : (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phase: state.phase,
    location: state.location,
    showTopNav: state.showTopNav,
  };
};

export default connect(mapStateToProps)(TopNav);
