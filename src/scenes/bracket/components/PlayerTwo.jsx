import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import style from "./playerTwo.jss.js";

class PlayerTwo extends Component {
  render() {
    const componentStyle = style(this.props.left);
    return (
      <div style={componentStyle.playerContainer}>
        <div style={componentStyle.quarter}>{this.props.quarter}</div>
        <div style={componentStyle.player}>{this.props.player.name}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // players: state.players,
    // redirectTo: state.redirectTo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTwo);
