import React, { Component } from 'react'
import Selector from './components/selector/selector'
import Distance from './components/distance/distance'
import General from './components/general/general'
import ClearButton from './components/clear-button/clear-button' 
import ContinueButton from './components/continue-button/continue-button'
import mobileStyle from './choose-settings-mobile.jss.js'
import text from './choose-settings-text'
import constants from './choose-settings-constants'

class ChooseSettings extends Component {
  constructor(props){
      super(props)
      this.state = {
          price: '',
          stars: '',
      }
  } 

  render() {
    const style = mobileStyle
    return (
      <div>
          <div style={style.header}>
              {text.header}
          </div>
          <div style={style.instructions}>
              {text.instructions}
          </div>
          <Selector category={constants.PRICE} />
          <Distance />
          <General />
          <ClearButton />
          <ContinueButton />
      </div>
    )
  }
}

export default ChooseSettings


//  <Selector category={constants.STARS} /> If search by stars
