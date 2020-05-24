import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Matchup from "../components/matchup";
import MatchupModal from "../components/matchupModal";
import style from "./EliteAte.jss.js";
import { openMatchupModal } from "../../../actions/modals/matchup-modal";
import finalForkLogo from "../../../assets/final_fork.png";

class FinalFork extends Component {
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
    ];

    return (
      <>
        <div style={style.imageContainer}>
          <img src={finalForkLogo} alt="logo" style={style.logo} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FinalFork);
