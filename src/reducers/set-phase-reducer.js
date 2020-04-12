import { SET_PHASE } from "../actions/set-phase";

const initialState = "";

export const setPhaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHASE:
      return action.phase;
    default:
      return state;
  }
};

export default setPhaseReducer;
