import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PageLayout from "../../components/page-layout/PageLayout";

class Bracket extends Component {
  render() {
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Bracket);
