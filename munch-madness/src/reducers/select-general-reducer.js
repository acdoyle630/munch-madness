import { SELECT_GENERAL } from '../actions/select-general'

const initialState = {
    checkedOpen: false,
    checkedGroups: false,
    checkedRes: false,
    checkedHappy: false
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
  