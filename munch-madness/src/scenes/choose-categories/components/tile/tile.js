import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCategory } from '../../../../actions/select-category'
import { search } from '../../../../services/yelp'
import mobileStyle from './tile.jss'

class Tile extends Component {

  pickCategory = async () => {
    const selectedTiles = Object.keys(this.props.selectedCategory).filter((tile) => {
        if(this.props.selectedCategory[tile]){
            return tile
        }
    })
    if( selectedTiles.length < 8 || this.props.selectedCategory[this.props.tile] ) {
        if(!this.props.selectedCategory[this.props.tile]) {
            this.searchYelp()
        }
        await this.props.selectCategory(this.props.tile)        
    }
  }

  searchYelp = async () => {
    const payload = this.buildPayload(this.props.tile)
        try {
            const result = await search(payload)
            console.log(result.name)
        } catch(error) {
            console.log(error)
        }
    }

    buildPayload = (category) => {
        return {
            location: '72713',
            term: category,
            price: this.allowedPrices(),
            open_now: true,
        }
    }

    allowedPrices = () => {
        let prices = []
        Object.keys(this.props.selectedPrice).forEach((price) => {
            if( this.props.selectedPrice[price] ) {
                prices.push(Number(price) + 1).toString()
            }
        })
        return prices.join(',')
    }

  render() {
    const style= mobileStyle
    return (
      <div 
        style={this.props.selectedCategory[this.props.tile] ? style.selectedTile : style.tile}
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       selectCategory,
    },
    dispatch,
  )
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tile)