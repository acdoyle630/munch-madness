import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import mobileStyle from './continue-button.jss'

class ContinueButton extends Component {
  constructor(props){
      super(props)
      this.state = {
          chooseCategories: false,
      }
  }

  render() {

    if ( this.state.chooseCategories ) {
        return(
            <Redirect to={{
              pathname : '/choose-categories'
            }} />
        ) 
    }
    
    const style = mobileStyle

    return (
      <div 
        style={style.button}
        onClick={(() => {
            this.setState({ chooseCategories: true })
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
  