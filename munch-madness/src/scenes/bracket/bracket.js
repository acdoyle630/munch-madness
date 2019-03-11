import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Bracket extends Component {
 

  render() {
    return (
      <div>
          BRACKET 
          {this.props.players.map((player) => {
              return(
                    <div>
                        {player.name}
                    </div>
              )
          })}
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    },
    dispatch,
  )
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bracket)
