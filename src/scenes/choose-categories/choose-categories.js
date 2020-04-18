import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetCategories } from "../../actions/select-category";
import { resetTeams } from "../../actions/teams";
import Redirector from "../../scenes/redirector/redirector";
import Tile from "./components/tile/tile";
import ContinueButton from "./components/continue-button/continue-button";
import ClearButton from "./components/clear-button/clear-button";
import mobileStyle from "./choose-categories.jss";
import PageLayout from "../../components/page-layout/PageLayout";
import { tiles } from "./tiles";

class ChooseCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startOver: false,
    };
  }

  render() {
    const style = mobileStyle;
    // if (this.state.startOver) {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/",
    //       }}
    //     />
    //   );
    // }
    if (this.props.redirectTo !== this.props.match.path) {
      return <Redirector />;
    }
    return (
      <PageLayout>
        <div style={style.chooseCategories}>
          {/* <div
            onClick={() => {
              this.setState({ startOver: true });
              this.props.resetCategories();
              this.props.resetTeams();
            }}
            style={style.startOver}
          >
            Start Over
          </div> */}
          <div style={style.header}>Categories</div>
          <div style={style.directions}>
            Choose up to 8 categories to include in the tournament.
          </div>
          {/* <input style={style.searchBar} placeholder={"search"}></input> */}
          <div style={style.tileContainer}>
            {tiles.map((tile, index) => {
              return <Tile tile={tile.name} icon={tile.icon} key={index} />;
            })}
          </div>
          {/* <ClearButton /> */}
          <ContinueButton />
        </div>
      </PageLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    redirectTo: state.redirectTo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      resetCategories,
      resetTeams,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCategories);
