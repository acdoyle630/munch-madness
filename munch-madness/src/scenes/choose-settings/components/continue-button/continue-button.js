import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import mobileStyle from './continue-button.jss'

class ContinueButton extends Component {

  render() {
    
    const style = mobileStyle

    return (
      <div 
        style={style.button}
        onClick={(() => {
            console.log('continue')
      })}>
          Continue
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//     return {}
//   }
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       
    },
    dispatch,
  )
}
  
export default connect(
    //mapStateToProps,
    undefined,
    mapDispatchToProps
)(ContinueButton)
  