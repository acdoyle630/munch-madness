import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import style from "./closeUp.jss.js";

class CloseUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextRound: [],
      selectedPlayer: undefined,
      playerOne: undefined,
      playerTwo: undefined,
    };
  }

  componentDidMount = () => {
    this.setState({
      playerOne: this.props.players[0],
      playerTwo: this.props.players[1],
    });
  };

  select = (player, index) => {
    const nextRoundPlayers = [...this.state.nextRound];
    nextRoundPlayers.push(player);
    this.setState({ nextRound: nextRoundPlayers, selectedPlayer: index });
    this.advance();
  };

  advance = () => {};

  render() {
    console.log(this.state);
    return (
      <div style={style.container}>
        <div
          style={
            this.state.selectedPlayer === 1
              ? style.playerSelected
              : style.player
          }
          onClick={() => {
            this.select(this.state.playerOne, 1);
          }}
        >
          {this.state.playerOne && this.state.playerOne.name}
        </div>
        <div style={style.vs}>VS.</div>
        <div
          style={
            this.state.selectedPlayer === 2
              ? style.playerSelected
              : style.player
          }
          onClick={() => {
            this.select(this.state.playerTwo, 2);
          }}
        >
          {this.state.playerTwo && this.state.playerTwo.name}
        </div>
      </div>
    );
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
