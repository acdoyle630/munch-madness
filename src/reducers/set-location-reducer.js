import { SET_LOCATION } from "../actions/set-location";
import { RESET_TEAMS } from "../actions/teams";

const initialState = {};

export const setLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.location;
    case RESET_TEAMS:
      return initialState;
    default:
      return state;
  }
};

export default setLocationReducer;
