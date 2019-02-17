import { combineReducers } from 'redux'

import { selectPriceReducers } from './select-price-reducer'
import { selectStarsReducers } from './select-stars-reducer'

export default combineReducers({
    selectedPrice: selectPriceReducers,
    selectedStars: selectStarsReducers,
})
  