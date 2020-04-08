import { SET_LOCATION } from '../actions/set-location'

const initialState = {}

export const setLocationReducer = (state = initialState, action) =>{
    switch(action.type){
      case SET_LOCATION:
        return action.location
      default : return state;
    }
  }
  
export default setLocationReducer
