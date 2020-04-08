import { SELECT_PRICE } from '../actions/select-price'

const initialState = {
    0: false,
    1: false,
    2: false,
    3: false,
}

export const selectPriceReducers = (state = initialState, action) =>{
    switch(action.type){
      case SELECT_PRICE:
        let returnState = Object.assign({}, state)
        returnState[action.price] = !returnState[action.price]
        return returnState
      default : return state;
    }
  }
  
  export default selectPriceReducers