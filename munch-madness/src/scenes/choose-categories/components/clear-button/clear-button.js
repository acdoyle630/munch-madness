import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import mobileStyle from './clear-button.jss'

class ClearButton extends Component {

  render() {
    
    const style = mobileStyle

    return (
      <div 
        style={style.button}
        onClick={(() => {
          console.log('clear')
      })}>
          Clear
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//     return {}
//   }
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       //clearAll,
    },
    dispatch,
  )
}
  
export default connect(
    //mapStateToProps,
    undefined,
    mapDispatchToProps
)(ClearButton)
  