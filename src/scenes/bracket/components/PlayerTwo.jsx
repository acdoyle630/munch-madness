import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import style from "./playerTwo.jss.js";

class PlayerTwo extends Component {
  render() {
    const componentStyle = style(this.props.left);
    console.log(this.props.player);
    return (
      <div style={componentStyle.playerContainer}>
        <div>Q1</div>
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
