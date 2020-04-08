import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectPrice } from '../../../../actions/select-price'
import { selectStars } from '../../../../actions/select-stars'
import constants from '../../choose-settings-constants'
import mobileStyle from './selector-mobile.jss.js'
class Selector extends Component {

  setIndicatorLevel = ( index ) => {
     this.props.category === constants.PRICE
         ? this.props.selectPrice( index )
         : this.props.selectStars( index )
  }

  buildSelector = () => {
    const indicator = this.props.category === constants.STARS 
    ? '*' 
    : '$'
    const options = [0,1,2,3]
    return options.map((digit, index) => {
        return(
            <div 
                key={index}
                style={this.setBoxStyle(index)}
                onClick={(() => {
                        this.setIndicatorLevel(index)
                    })
                }
            >
                {this.numberOfIndicators(indicator, index)}
            </div>
        )
    })
  }

  setBoxStyle = (index) => {
      const style = mobileStyle
      let selectedStyle
      if ( this.props.category === constants.PRICE ) {
        selectedStyle = this.props.selectedPrice[index] ? style.selectedBox : style.unselectedBox
        return selectedStyle
      } else {
        selectedStyle = this.props.selectedStars[index] ? style.selectedBox : style.unselectedBox
      }
      return selectedStyle
  }

  numberOfIndicators = (indicator, index) => {
      let usedIndicators = 1
      let response = [indicator]
      while( usedIndicators <= index ) {
          response.push(indicator)
          usedIndicators++
      }
      return response
  }

  render() {
    const style = mobileStyle

    return (
      <div>
          <div style={style.category}>
              {this.props.category}
          </div>
          <div style={style.grid}>
              {this.buildSelector()}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        selectedPrice: state.selectedPrice,
        selectedStars: state.selectedStars,
        generalSelections: state.generalSelections,
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectPrice,
        selectStars,
    },
    dispatch,
  )
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Selector)
  