import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PageLayout from "../../components/page-layout/PageLayout";
import Redirector from "../../scenes/redirector/redirector";
import {
  openRoundModal,
  closeRoundModal,
} from "../../actions/modals/round-modal";
import { resetTeams } from "../../actions/teams";
import ChampModal from "../../components/modals/champModal";
import { roundRouter } from "./rounds/roundRouter";

class Bracket extends Component {
  render() {
    //TODO redirect top nav
    const that = this;
    if (this.props.players.length === 8) {
      this.props.openRoundModal(this.props.players.length);
      setTimeout(() => {
        that.props.closeRoundModal();
      }, 2000);
    }
    if (this.props.players.length === 4) {
      this.props.openRoundModal(this.props.players.length);
      setTimeout(() => {
        that.props.closeRoundModal();
      }, 2000);
    }
    if (this.props.players.length === 2) {
      this.props.openRoundModal(this.props.players.length);
      setTimeout(() => {
        that.props.closeRoundModal();
      }, 2000);
    }
    return (
      <>
        <PageLayout>{roundRouter[this.props.players.length]}</PageLayout>
        <ChampModal />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    redirectTo: state.redirectTo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { openRoundModal, closeRoundModal, resetTeams },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Bracket);
