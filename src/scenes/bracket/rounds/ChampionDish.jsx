import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import style from "./EliteAte.jss.js";
import { openMatchupModal } from "../../../actions/modals/matchup-modal";
import CloseUp from "../components/closeUp";
import championDishLogo from "../../../assets/champion_dish.png";

class ChampionDish extends Component {
  render() {
    return (
      <div style={style.championContainer}>
        <div style={style.imageContainer}>
          <img src={championDishLogo} alt="logo" style={style.logo} />
        </div>
        <CloseUp />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChampionDish);
