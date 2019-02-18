import React, { Component } from 'react'
import Selector from './components/selector/selector'
import Distance from './components/distance/distance'
import General from './components/general/general'
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
          <Selector category={constants.STARS} />
          <Distance />
          <General />
      </div>
    )
  }
}

export default ChooseSettings
