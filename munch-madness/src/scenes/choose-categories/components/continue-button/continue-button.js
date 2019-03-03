import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

  render() {
    // if ( this.state.continue ) {
    //     return(
    //         <Redirect to={{
    //           pathname : '/teams'
    //         }} />
    //     ) 
    // }
    
    const style = mobileStyle

    return (
      <div 
        style={style.button}
        onClick={this.searchYelp}>
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
)(ContinueButton)
  