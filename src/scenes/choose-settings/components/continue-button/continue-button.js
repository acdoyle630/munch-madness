import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPhase } from "../../../../actions/set-phase";
import { redirectToPath } from "../../../../actions/redirect-to";
import { Redirect } from "react-router-dom";
import mobileStyle from "./continue-button.jss";
import { redirectPaths } from "../../../../constants/redirect-paths";

class ContinueButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseCategories: false,
    };
  }

  render() {
    if (this.state.chooseCategories) {
      return (
        <Redirect
          to={{
            pathname: "/choose-categories",
          }}
        />
      );
    }

    const style = mobileStyle;

    return (
      <div
        style={style.button}
        onClick={() => {
          this.props.setPhase("Players");
          this.props.redirectToPath(redirectPaths.Parameters.forward);
          //this.setState({ chooseCategories: true });
        }}
      >
        Continue to Categories
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {}
//   }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setPhase,
      redirectToPath,
    },
    dispatch
  );
};

export default connect(
  //mapStateToProps,
  undefined,
  mapDispatchToProps
)(ContinueButton);
