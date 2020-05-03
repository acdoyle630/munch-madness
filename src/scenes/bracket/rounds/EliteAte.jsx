import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Matchup from "../components/matchup";
import MatchupModal from "../components/matchupModal";
import style from "./EliteAte.jss.js";
import { openMatchupModal } from "../../../actions/modals/matchup-modal";
import eliteAteLogo from "../../../assets/elite_ate.png";

class EliteAte extends Component {
  render() {
    const matchUps = [
      {
        playerOne: this.props.players[0],
        playerTwo: this.props.players[1],
        left: true,
        quarter: "Q1",
      },
      {
        playerOne: this.props.players[2],
        playerTwo: this.props.players[3],
        left: false,
        quarter: "Q2",
      },
      {
        playerOne: this.props.players[4],
        playerTwo: this.props.players[5],
        left: true,
        quarter: "Q3",
      },
      {
        playerOne: this.props.players[6],
        playerTwo: this.props.players[7],
        left: false,
        quarter: "Q4",
      },
    ];

    return (
      <>
        <div style={style.imageContainer}>
          <img src={eliteAteLogo} alt="logo" style={style.logo} />
        </div>
        <div style={style.container}>
          <div style={style.matchupContainer}>
            {matchUps.map((players, index) => {
              return <Matchup players={players} index={index} />;
            })}
          </div>
          <div
            style={style.callToAction}
            onClick={() => {
              this.props.openMatchupModal();
            }}
          >
            <div style={style.text}>Game Time</div>
          </div>
        </div>
        <MatchupModal />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ openMatchupModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EliteAte);
