
import React, { Component } from 'react'
import mobileStyle from './home-page.jss'
import text from './home-page-text'
import { Redirect } from 'react-router-dom'

class HomePage extends Component {
  constructor(props){
      super(props)
      this.state = {
          chooseSettings: false
      }
  }

  chooseSettings = () => {
      this.setState({
          chooseSettings: true
      })
  }

  render() {

    if ( this.state.chooseSettings ) {
        return(
            <Redirect to={{
              pathname : '/choose-settings'
            }} />
        ) 
    }

    const style = mobileStyle
    return (
      <div>
        <div style={style.logo}>
            LOGO    
        </div>
        <div style={style.callToAction} onClick={this.chooseSettings}>
            {text.callToAction}
        </div>
      </div>
    )
  }
}

export default HomePage
