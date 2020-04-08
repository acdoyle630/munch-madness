import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
//import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
//import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
//import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import mobileStyle from './distance-mobile.jss.js'
import { selectDistance } from '../../../../actions/select-distance'

const styles = theme => ({
  root: {
    //marginTop: '100px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '94vw',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

class Distance extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  }

  componentWillReceiveProps = (props) => {
      this.setState({age: props.selectedDistance})
  } 

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    this.props.selectDistance(event.target.value)
  }

  render() {
    const { classes } = this.props
    const style = mobileStyle

    return (
      <form className={classes.root} autoComplete="off">
        <div style={style.category}>Distance</div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref
            }}
            htmlFor="outlined-age-simple"
          >
            
          </InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={8000}>5 Mile</MenuItem>
            <MenuItem value={16000}>10 Mile</MenuItem>
            <MenuItem value={24000}>15 Mile</MenuItem>
            <MenuItem value={32000}>20 Miles</MenuItem>
            <MenuItem value={40000}>25 Miles</MenuItem>
          </Select>
        </FormControl>
      </form>
    )
  }
}

Distance.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        selectedDistance: state.selectedDistance,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectDistance,
    },
    dispatch,
  )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Distance))