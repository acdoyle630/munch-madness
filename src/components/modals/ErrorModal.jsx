import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeErrorModal } from "../../actions/modals/error-modal";
import { Modal } from "@material-ui/core";
import style from "./ErrorModal.jss";

class ErrorModal extends Component {
  render() {
    return (
      <Modal open={this.props.errorModal.isOpen} style={style.modal}>
        <div style={style.modalBody}>
          <div style={style.header}>{this.props.errorModal.header}</div>
          <div style={style.body}>{this.props.errorModal.message}</div>
          <div onClick={this.props.closeErrorModal} style={style.button}>
            OKAY
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorModal: state.errorModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeErrorModal,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
