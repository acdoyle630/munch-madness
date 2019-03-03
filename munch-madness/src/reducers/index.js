import { combineReducers } from 'redux'

import { selectPriceReducers } from './select-price-reducer'
import { selectStarsReducers } from './select-stars-reducer'
import { selectDistanceReducer } from './select-distance-reducer'
import { selectGeneralReducer } from './select-general-reducer'
import { selectCategoryReducer } from './select-category-reducer'
import { teamsReducer } from './teams-reducer'


export default combineReducers({
    selectedPrice: selectPriceReducers,
    selectedStars: selectStarsReducers,
    selectedDistance: selectDistanceReducer,
    generalSelections: selectGeneralReducer,
    selectedCategory: selectCategoryReducer,
    teams: teamsReducer,
})
  