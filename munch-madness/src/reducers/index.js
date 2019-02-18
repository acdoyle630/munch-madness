import { combineReducers } from 'redux'

import { selectPriceReducers } from './select-price-reducer'
import { selectStarsReducers } from './select-stars-reducer'
import { selectDistanceReducer } from './select-distance-reducer'
import { selectGeneralReducer } from './select-general-reducer'


export default combineReducers({
    selectedPrice: selectPriceReducers,
    selectedStars: selectStarsReducers,
    selectedDistance: selectDistanceReducer,
    generalSelections: selectGeneralReducer,
})
  