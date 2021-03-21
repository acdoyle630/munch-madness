import { SELECT_STARS } from "../actions/select-stars";
import { RESET_TEAMS } from "../actions/teams";

const initialState = {
  0: false,
  1: false,
  2: false,
  3: false,
};

export const selectStarsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_STARS:
      let returnState = Object.assign({}, state);
      returnState[action.stars] = !returnState[action.stars];
      return returnState;
    case RESET_TEAMS:
      return initialState;
    default:
      return state;
  }
};

export default selectStarsReducers;
