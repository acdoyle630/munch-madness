import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import style from "./playerOne.jss.js";

class PlayerOne extends Component {
  render() {
    const componentStyle = style(this.props.left);
    return (
      <div style={componentStyle.playerContainer}>{this.props.player.name}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerOne);
