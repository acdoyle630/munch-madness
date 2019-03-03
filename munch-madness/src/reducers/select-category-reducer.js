import { SELECT_CATEGORY, DISABLE_CATEGORY, RESET_CATEGORIES } from '../actions/select-category'

const initialState = {
    pizza: {
        selected: false,
        available:true
    },
    sandwich: {
        selected: false,
        available: true,
    }, 
    sushi: {
        selected: false,
        available:true
    },
    'fast food': {
        selected: false,
        available:true
    },
    Chinese: {
        selected: false,
        available:true
    },
    pho: {
        selected: false,
        available:true
    },
    thai: {
        selected: false,
        available:true
    },
    Italian: {
        selected: false,
        available:true
    },
    Mexican: {
        selected: false,
        available:true
    },
    'food trucks': {
        selected: false,
        available:true
    },
    buffet: {
        selected: false,
        available:true
    },
    tapas: {
        selected: false,
        available:true
    },
}

export const selectCategoryReducer = (state = initialState, action) =>{
    switch(action.type){
      case SELECT_CATEGORY:
         return Object.assign({}, state, {
             [action.category]: {
                 selected: !state[action.category].selected,
                 available: true,
             } 
         })
      case DISABLE_CATEGORY:
         return Object.assign({}, state, {
            [action.category]: {
                selected: false,
                available: false,
            }
         })
      case RESET_CATEGORIES:
         return initialState
      default : return state;
    }
  }
  
  export default selectCategoryReducer
  