import { OPEN_BRACKET } from "../actions/open-bracket";
import { RESET_TEAMS } from "../actions/teams";

const initialState = {
  isOpen: false,
};

export const bracketReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_BRACKET:
      return Object.assign({}, state, {
        isOpen: true,
      });
    case RESET_TEAMS:
      return initialState;
    default:
      return state;
  }
};

export default bracketReducer;
