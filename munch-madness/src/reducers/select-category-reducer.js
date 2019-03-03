import { SELECT_CATEGORY } from '../actions/select-category'

const initialState = {
    pizza: false,
    sandwich: false, 
    sushi: false,
    'fast food': false,
    Chinese: false,
    pho: false,
    thai: false,
    Italian: false,
    Mexican: false,
    'food trucks': false,
    buffet: false,
    tapas: false,
}

export const selectCategoryReducer = (state = initialState, action) =>{
    switch(action.type){
      case SELECT_CATEGORY:
         return Object.assign({}, state, {
             [action.category]: !state[action.category]
         })
      default : return state;
    }
  }
  
  export default selectCategoryReducer
  