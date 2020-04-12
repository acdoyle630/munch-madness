import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import mobileStyle from "./home-page.jss";
import text from "./home-page-text";
import { Redirect } from "react-router-dom";
import { showTopNav } from "../../actions/show-top-nav";
import { zipSearch } from "../../services/zip";
import { setLocation } from "../../actions/set-location";
import { openErrorModal } from "../../actions/modals/error-modal";
import { setPhase } from "../../actions/set-phase";
import logo from "../../assets/Logo.png";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseSettings: false,
      zip: "",
    };
  }

  componentWillMount = () => {
    this.props.showTopNav(false);
  };

  chooseSettings = async () => {
    try {
      const response = await zipSearch(this.state.zip);
      this.props.setPhase("Parameters");
      this.props.setLocation(response.item);
      this.setState({
        chooseSettings: true,
      });
    } catch (e) {
      this.props.openErrorModal({
        header: "You dun goofed",
        message: "Please choose a valid zip code",
      });
    }
  };

  handleZipChange = async (event) => {
    if (this.state.zip.length < 5 || event.target.value.length < 5) {
      await this.setState({ zip: event.target.value });
    }
  };

  render() {
    if (this.state.chooseSettings) {
      return (
        <Redirect
          to={{
            pathname: "/choose-settings",
          }}
        />
      );
    }

    const style = mobileStyle;
    return (
      <div style={style.background}>
        <img style={style.logo} src={logo} alt="logo" width="70%" />
        <input
          style={style.input}
          placeholder="Enter your zip code"
          id="zip"
          type="number"
          value={this.state.zip}
          onChange={this.handleZipChange}
        />
        <div style={style.callToAction} onClick={this.chooseSettings}>
          <div style={style.text}>{text.callToAction}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setLocation,
      showTopNav,
      openErrorModal,
      setPhase,
    },
    dispatch
  );
};

export default connect(undefined, mapDispatchToProps)(HomePage);
