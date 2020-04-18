import { REDIRECT_TO } from "../actions/redirect-to";
const initialState = "/home";

export const redirectToReducer = (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT_TO:
      return action.path;
    default:
      return state;
  }
};

export default redirectToReducer;
