import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './TopNav.jss'
import { AppBar, Toolbar } from '@material-ui/core'
class TopNav extends Component {
    render(){
        const { city, state } = this.props.location
        console.log(this.props.location)
        return(
            <AppBar position="fixed" style={style.topNav}>
                <Toolbar>{city && `${city}, ${state}`}</Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        location: state.location
    }
}
  
export default connect(
    mapStateToProps
    )(TopNav)
