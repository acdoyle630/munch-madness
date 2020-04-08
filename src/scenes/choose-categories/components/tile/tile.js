import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCategory } from '../../../../actions/select-category'
import { searchYelp } from '../../../../action-thunks/search-yelp'
import { removeTeam } from '../../../../actions/teams'
import mobileStyle from './tile.jss'

class Tile extends Component {

  pickCategory = async () => {
    const selectedTiles = Object.keys(this.props.selectedCategory).filter((tile) => {
        if(this.props.selectedCategory[tile].selected){
            return tile
        }
    })
    if( selectedTiles.length < 8 || this.props.selectedCategory[this.props.tile].selected ) {
        if(!this.props.selectedCategory[this.props.tile].selected) {
            this.props.searchYelp(this.props.tile)
        } else {
            this.props.removeTeam(this.props.tile)
        }
        await this.props.selectCategory(this.props.tile)        
    }
  }

  tileStyle = () => {
      const style = mobileStyle
      if (!this.props.selectedCategory[this.props.tile].available) {
          return style.disabledTile
      }
      else if(this.props.selectedCategory[this.props.tile].selected) {
          return style.selectedTile
      } else {
          return style.tile
      }
  }

  render() {
    return (
      <div 
        style={this.tileStyle()}
        onClick={this.pickCategory}
      >
        {this.props.tile}
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
    return {
        selectedCategory: state.selectedCategory,
        selectedPrice: state.selectedPrice,
        selectedStars: state.selectedStars,
        selectedDistance: state.selectedDistance,
        generalSelections: state.generalSelections,
        teams: state.teams,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       selectCategory,
       searchYelp,
       removeTeam,
    },
    dispatch,
  )
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tile)
