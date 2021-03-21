import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import style from "./TopNav.jss";
import { AppBar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { redirectToPath } from "../../actions/redirect-to";
import { setPhase } from "../../actions/set-phase";
import { redirectPaths } from "../../constants/redirect-paths";
import { Redirect } from "react-router-dom";

class TopNav extends Component {
  startOver = () => {
    return (
      <Redirect
        to={{
          pathname: "home",
        }}
      />
    );
  };

  render() {
    const backPhase = redirectPaths[this.props.phase]
      ? redirectPaths[this.props.phase].backPhase
      : null;
    const back = redirectPaths[this.props.phase]
      ? redirectPaths[this.props.phase].back
      : "/home";
    const { MixedCaseCity, State } = this.props.location;
    return this.props.showTopNav ? (
      <AppBar position="fixed" style={style.topNav}>
        <div style={style.toolBar}>
          <div
            style={style.phase}
            onClick={() => {
              if (
                //If in bracket - start over
                this.props.phase === "Elite Ate" ||
                this.props.phase === "Final Fork" ||
                this.props.phase === "Champion Dish"
              ) {
                this.props.redirectToPath("/home");
                this.props.setPhase(null);
              } else {
                this.props.redirectToPath(back);
                this.props.setPhase(backPhase);
              }
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      redirectToPath,
      setPhase,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
