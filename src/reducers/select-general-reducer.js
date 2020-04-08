import { SELECT_GENERAL } from '../actions/select-general'

const initialState = {
    open_now: false,
    checkedGroups: false,
    reservation: false,
    deals: false
}

export const selectGeneralReducer = (state = initialState, action) =>{
    switch(action.type){
      case SELECT_GENERAL:
        let returnedState = Object.assign({}, state)
        returnedState[action.selector] = !returnedState[action.selector]
        return returnedState
      default : return state;
    }
  }
  
  export default selectGeneralReducer
  