import { SHOW_TOP_NAV } from "../actions/show-top-nav";

const initialState = false;

export const showTopNavReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOP_NAV:
      return action.shouldShow;
    default:
      return state;
  }
};

export default showTopNavReducer;
