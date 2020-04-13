import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectGeneral } from "../../../../actions/select-general";
import mobileStyle from "./general-mobile.jss.js";
import Switch from "@material-ui/core/Switch";

class General extends React.Component {
  state = {
    open_now: false,
    checkedGroups: false,
    reservation: false,
    deals: false,
  };

  componentWillReceiveProps = (props) => {
    this.setState({
      open_now: props.generalSelections.open_now,
      checkedGroups: props.generalSelections.checkedGroups,
      reservation: props.generalSelections.reservation,
      deals: props.generalSelections.deals,
    });
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked });
    this.props.selectGeneral(name);
  };

  render() {
    const style = mobileStyle;

    return (
      <div style={style.general}>
        <div style={style.switch}>
          <div style={style.text}>Open now</div>
          <Switch
            color="primary"
            checked={this.state.open_now}
            onChange={this.handleChange("open_now")}
            style={style.individualSwitch}
          />
        </div>
        {/* <div style={style.switch}>  No Groups Query
            <div>
                Good for Groups
            </div>
            <Switch
                checked={this.state.checkedGroups}
                onChange={this.handleChange('checkedGroups')}
                style={style.individualSwitch}
            />
        </div> */}
        <div style={style.switch}>
          <div style={style.text}>Takes Reservations</div>
          <Switch
            color="primary"
            checked={this.state.reservation}
            onChange={this.handleChange("reservation")}
            style={style.individualSwitch}
          />
        </div>
        {/* <div style={style.switch}>
            <div>
                Offers Deals
            </div>
            <Switch
                checked={this.state.deals}
                onChange={this.handleChange('deals')}
                style={style.individualSwitch}
            />
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    generalSelections: state.generalSelections,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      selectGeneral,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(General);
