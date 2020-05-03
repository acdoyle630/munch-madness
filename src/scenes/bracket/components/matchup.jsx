import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import style from "./matchup.jss.js";
import PlayerOne from "./playerOne";
import PlayerTwo from "./PlayerTwo";

class Matchup extends Component {
  render() {
    return (
      <div style={style.matchup}>
        <PlayerOne
          player={this.props.players.playerOne}
          left={this.props.players.left}
        />
        <PlayerTwo
          player={this.props.players.playerTwo}
          left={this.props.players.left}
          quarter={this.props.players.quarter}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Matchup);
