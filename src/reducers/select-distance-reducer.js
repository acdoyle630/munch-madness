import { SELECT_DISTANCE } from "../actions/select-distance";
import { RESET_TEAMS } from "../actions/teams";

const initialState = null;

export const selectDistanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DISTANCE:
      return action.distance;
    case RESET_TEAMS:
      return initialState;
    default:
      return state;
  }
};

export default selectDistanceReducer;
