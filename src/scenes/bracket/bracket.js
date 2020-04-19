import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PageLayout from "../../components/page-layout/PageLayout";
import Redirector from "../../scenes/redirector/redirector";

class Bracket extends Component {
  render() {
    if (this.props.redirectTo !== this.props.match.path) {
      return <Redirector />;
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
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Bracket);
