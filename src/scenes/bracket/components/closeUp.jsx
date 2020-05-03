import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import style from "./matchup.jss.js";

class CloseUp extends Component {
  render() {
    console.log(this.props.players);
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    // redirectTo: state.redirectTo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CloseUp);
