import { ADD_NEW_PLAYER } from '../actions/add-new-player'

const initialState = []

export const selectedPlayersReducer = (state = initialState, action) =>{
    switch(action.type){
      case ADD_NEW_PLAYER:
        return state.concat(action.newPlayer)
      default : return state;
    }
  }
  
export default selectedPlayersReducer
