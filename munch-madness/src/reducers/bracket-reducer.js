import { OPEN_BRACKET } from '../actions/open-bracket'

const initialState = {
    isOpen: false
}

export const bracketReducer = (state = initialState, action) =>{
    switch(action.type){
      case OPEN_BRACKET:
        return Object.assign({}, state, {
            isOpen: true
        })
      default : return state;
    }
  }
  
  export default bracketReducer