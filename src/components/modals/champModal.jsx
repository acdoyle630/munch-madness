import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Modal } from "@material-ui/core";
import style from "./champModal.jss";
import Confetti from "react-confetti";
// import eliteAteLogo from "../../assets/elite_ate.png";
// import finalForkLogo from "../../assets/final_fork.png";
// import championDishLogo from "../../assets/champion_dish.png";

class ChampModal extends Component {
  render() {
    const champ = this.props.champModal.isOpen
      ? this.props.champModal.champ.name
      : undefined;
    console.log(this.props);
    //const roundStyle = style(this.props.roundModal.round);
    return (
      <Modal open={this.props.champModal.isOpen}>
        <>
          <Confetti />
          <div style={style.container}>
            <div style={style.winner}>
              <div style={style.champ}>{champ}</div>
            </div>
          </div>
        </>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    champModal: state.champModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChampModal);
