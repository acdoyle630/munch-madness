import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeMatchupModal } from "../../../actions/modals/matchup-modal";
import { closeRoundModal } from "../../../actions/modals/round-modal";
import { openChampModal } from "../../../actions/modals/champ-modal";
import { setPlayers } from "../../../actions/add-new-player";
import { setPhase } from "../../../actions/set-phase";
import style from "./closeUp.jss.js";

const nextPhase = {
  4: "Final Fork",
  2: "Champion Dish",
};

class CloseUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextRound: [],
      selectedPlayer: undefined,
      playerOne: undefined,
      playerTwo: undefined,
      playerOneIndex: 0,
    };
  }

  componentDidMount = () => {
    this.setState({
      playerOne: this.props.players[0],
      playerTwo: this.props.players[1],
    });
  };

  select = (player, index) => {
    if (this.props.players.length === 2) {
      this.props.openChampModal(player);
      this.props.closeMatchupModal();
    } else {
      const nextRoundPlayers = [...this.state.nextRound];
      nextRoundPlayers.push(player);
      this.setState(
        { nextRound: nextRoundPlayers, selectedPlayer: index },
        this.advance
      );
    }
  };

  advance = () => {
    setTimeout(() => {
      //const nextRound = this.state.round + 1;
      const playerOneIndex = this.state.playerOneIndex + 2;
      const playerTwoIndex = this.state.playerOneIndex + 3;
      if (this.props.players[playerOneIndex]) {
        this.setState({
          //round: nextRound,
          playerOne: this.props.players[playerOneIndex],
          playerTwo: this.props.players[playerTwoIndex],
          playerOneIndex: playerOneIndex,
          selectedPlayer: undefined,
        });
      } else {
        this.props.closeMatchupModal();
        this.props.setPlayers(this.state.nextRound);
        this.props.setPhase(nextPhase[this.state.nextRound.length]);
      }
    }, 1000);
  };

  render() {
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
  return bindActionCreators(
    {
      closeMatchupModal,
      closeRoundModal,
      setPlayers,
      setPhase,
      openChampModal,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CloseUp);
