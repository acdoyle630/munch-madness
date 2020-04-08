import { SELECT_DISTANCE } from '../actions/select-distance'

const initialState = null

export const selectDistanceReducer = (state = initialState, action) =>{
    switch(action.type){
      case SELECT_DISTANCE:
       return action.distance
      default : return state;
    }
  }
  
  export default selectDistanceReducer
  