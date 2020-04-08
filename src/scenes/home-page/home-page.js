
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import mobileStyle from './home-page.jss'
import text from './home-page-text'
import { Redirect } from 'react-router-dom'
import { Input } from '@material-ui/core';
import { zipSearch } from '../../services/zip'
import { setLocation } from '../../actions/set-location'

class HomePage extends Component {
  constructor(props){
      super(props)
      this.state = {
          chooseSettings: false,
          zip: ''
      }
  }

  chooseSettings = async () => {
      try {
          const response =  await zipSearch(this.state.zip)
          this.props.setLocation(response.item)
          this.setState({
              chooseSettings: true
          })
      } catch (e) {
          console.log(e)
      }
  }

  handleZipChange = async (event) => {
      console.log(event.target.value)
      if(this.state.zip.length < 5 || event.target.value.length < 5){
          await this.setState({ zip: event.target.value })
          console.log(this.state.zip.length)
        }

        console.log(this.state.zip)
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
        <div style={style.form}>
           <Input id='zip' type='number' value={this.state.zip} onChange={this.handleZipChange}/>
        </div>
        <div style={style.callToAction} onClick={this.chooseSettings}>
            {text.callToAction}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setLocation,
    },
    dispatch,
  )
}
  
export default connect(
    undefined,
    mapDispatchToProps
)(HomePage)


//
// https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/90210?key=DEMOAPIKEY
// https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/80223/?key=L0LXBW0HLI22UZ75855G