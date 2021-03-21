import { SET_PHASE } from "../actions/set-phase";
import { RESET_TEAMS } from "../actions/teams";

const initialState = "";

export const setPhaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHASE:
      return action.phase;
    case RESET_TEAMS:
      return initialState;
    default:
      return state;
  }
};

export default setPhaseReducer;
