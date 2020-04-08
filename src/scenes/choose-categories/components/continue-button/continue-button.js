import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { generateTeams } from '../../../../action-thunks/generate-teams'
import { Redirect } from 'react-router-dom'
import mobileStyle from './continue-button.jss'

class ContinueButton extends Component {
  constructor(props){
      super(props)
      this.state = {
            continue: false,
            results: [],
      }
  }

  pickTeams = async () => {
      if( !this.props.teams.isFetching ){
          await this.props.generateTeams()
      }      
  }

  render() {
    if(this.props.players.length === 8){
        return(
            <Redirect to={{
              pathname : '/bracket'
            }} />
        ) 
    }
    
    const style = mobileStyle

    return (
      <div 
        style={style.button[this.props.teams.isFetching]}
        onClick={this.pickTeams}>
          Continue
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
    return {
        selectedCategory: state.selectedCategory,
        selectedPrice: state.selectedPrice,
        selectedStars: state.selectedStars,
        selectedDistance: state.selectedDistance,
        generalSelections: state.generalSelections,
        teams: state.teams,
        players: state.players,
        bracket: state.bracket,
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       generateTeams,
    },
    dispatch,
  )
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContinueButton)
  