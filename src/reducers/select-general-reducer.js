import { SELECT_GENERAL } from "../actions/select-general";
import { RESET_TEAMS } from "../actions/teams";

const initialState = {
  open_now: false,
  checkedGroups: false,
  reservation: false,
  deals: false,
};

export const selectGeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENERAL:
      let returnedState = Object.assign({}, state);
      returnedState[action.selector] = !returnedState[action.selector];
      return returnedState;
    case RESET_TEAMS:
      return initialState;
    default:
      return state;
  }
};

export default selectGeneralReducer;
