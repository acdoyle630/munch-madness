import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectGeneral } from '../../../../actions/select-general'
import mobileStyle from './general-mobile.jss.js'
import Switch from '@material-ui/core/Switch'

class General extends React.Component {
   
  state = {
    checkedOpen: false,
    checkedGroups: false,
    checkedRes: false,
    checkedHappy: false
  }

  componentWillReceiveProps = ( props ) => {
      this.setState({
          checkedOpen: props.generalSelections.checkedOpen,
          checkedGroups: props.generalSelections.checkedGroups,
          checkedRes: props.generalSelections.checkedRes,
          checkedHappy: props.generalSelections.checkedHappy,
      })
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
    this.props.selectGeneral(name)
  }

  render() {
    const style = mobileStyle

    return (
      <div style={style.general}>
        <div style={style.switch}>
            <div>
                Open now
            </div>
            <Switch
                checked={this.state.checkedOpen}
                onChange={this.handleChange('checkedOpen')}
                style={style.individualSwitch}
            />
        </div>
        <div style={style.switch}>
            <div>
                Good for Groups
            </div>
            <Switch
                checked={this.state.checkedGroups}
                onChange={this.handleChange('checkedGroups')}
                style={style.individualSwitch}
            />
        </div>
        <div style={style.switch}>
            <div>
                Takes Reservations
            </div>
            <Switch
                checked={this.state.checkedRes}
                onChange={this.handleChange('checkedRes')}
                style={style.individualSwitch}
            />
        </div>
        <div style={style.switch}>
            <div>
                Happy Hour
            </div>
            <Switch
                checked={this.state.checkedHappy}
                onChange={this.handleChange('checkedHappy')}
                style={style.individualSwitch}
            />
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        generalSelections: state.generalSelections,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectGeneral,
    },
    dispatch,
  )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(General)
  