import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "@material-ui/core";
import style from "./matchupModal.jss";
import CloseUp from "./closeUp";
//import eliteAteLogo from "../../assets/elite_ate.png";

class MatchupModal extends Component {
  render() {
    console.log(this.props.players);
    return (
      <Modal open={this.props.matchupModal.isOpen}>
        <div style={style.modal}>
          <div style={style.headerContainer}>
            <div style={style.header}>Let's Go!</div>
            <div style={style.subHeader}>Pick which of these you prefer</div>
          </div>
          <div>
            <CloseUp />
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    matchupModal: state.matchupModal,
    players: state.players,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchupModal);
