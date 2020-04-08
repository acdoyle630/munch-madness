import { SELECT_STARS } from '../actions/select-stars'

const initialState = {
    0: false,
    1: false,
    2: false,
    3: false,
}

export const selectStarsReducers = (state = initialState, action) =>{
    switch(action.type){
      case SELECT_STARS:
        let returnState = Object.assign({}, state)
        returnState[action.stars] = !returnState[action.stars]
        return returnState
      default : return state;
    }
  }
  
export default selectStarsReducers
