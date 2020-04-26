import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PageLayout from "../../components/page-layout/PageLayout";
import Redirector from "../../scenes/redirector/redirector";
import {
  openRoundModal,
  closeRoundModal,
} from "../../actions/modals/round-modal";

class Bracket extends Component {
  render() {
    if (this.props.redirectTo !== this.props.match.path) {
      return <Redirector />;
    }
    if (this.props.players.length === 8) {
      const that = this;
      this.props.openRoundModal(this.props.players.length);
      setTimeout(() => {
        that.props.closeRoundModal();
      }, 2000);
    }
    return (
      <PageLayout>
        <div>
          BRACKET
          {this.props.players.map((player) => {
            return <div>{player.name}</div>;
          })}
        </div>
      </PageLayout>
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
  return bindActionCreators({ openRoundModal, closeRoundModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Bracket);
