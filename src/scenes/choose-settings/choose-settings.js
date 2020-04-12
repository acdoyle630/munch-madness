import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Selector from "./components/selector/selector";
import Distance from "./components/distance/distance";
import General from "./components/general/general";
import ClearButton from "./components/clear-button/clear-button";
import ContinueButton from "./components/continue-button/continue-button";
import mobileStyle from "./choose-settings-mobile.jss.js";
import text from "./choose-settings-text";
import constants from "./choose-settings-constants";
import PageLayout from "../../components/page-layout/PageLayout";
import { showTopNav } from "../../actions/show-top-nav";

class ChooseSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      stars: "",
    };
  }

  componentWillMount = () => {
    this.props.showTopNav(true);
  };

  render() {
    const style = mobileStyle;
    return (
      <PageLayout>
        <div style={style.header}>{text.header}</div>
        <div style={style.instructions}>{text.instructions}</div>
        <Selector category={constants.PRICE} />
        <Distance />
        <General />
        <ClearButton />
        <ContinueButton />
      </PageLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showTopNav,
    },
    dispatch
  );
};

export default connect(undefined, mapDispatchToProps)(ChooseSettings);
