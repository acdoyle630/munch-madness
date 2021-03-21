import { SHOW_TOP_NAV } from "../actions/show-top-nav";
import { RESET_TEAMS } from "../actions/teams";

const initialState = false;

export const showTopNavReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOP_NAV:
      return action.shouldShow;
    case RESET_TEAMS:
      return initialState;
    default:
      return state;
  }
};

export default showTopNavReducer;
