import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "@material-ui/core";
import style from "./RoundModal.jss";
import eliteAteLogo from "../../assets/elite_ate.png";
import finalForkLogo from "../../assets/final_fork.png";
import championDishLogo from "../../assets/champion_dish.png";

const roundText = {
  8: "Round 1 of 3",
  4: "Round 2 of 3",
  2: "Round 3 of 3",
};

const roundLogo = {
  8: eliteAteLogo,
  4: finalForkLogo,
  2: championDishLogo,
};

class RoundModal extends Component {
  render() {
    const roundStyle = style(this.props.roundModal.round);
    return (
      <Modal open={this.props.roundModal.isOpen}>
        <div style={roundStyle.modalBody}>
          <img
            src={roundLogo[this.props.roundModal.round]}
            alt="logo"
            style={roundStyle.image}
          />
          <div style={roundStyle.text}>
            {roundText[this.props.roundModal.round]}
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    roundModal: state.roundModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundModal);
