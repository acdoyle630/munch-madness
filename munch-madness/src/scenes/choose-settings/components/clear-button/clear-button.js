import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearAll } from '../../../../action-thunks/clear-all'
import mobileStyle from './clear-button.jss'

class ClearButton extends Component {

  render() {
    
    const style = mobileStyle

    return (
      <div 
        style={style.button}
        onClick={(() => {
          this.props.clearAll()
      })}>
          CLEAR
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//     return {}
//   }
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       clearAll,
    },
    dispatch,
  )
}
  
export default connect(
    //mapStateToProps,
    undefined,
    mapDispatchToProps
)(ClearButton)
  