import { SELECT_PRICE } from "../actions/select-price";
import { RESET_TEAMS } from "../actions/teams";

const initialState = null;

export const selectPriceReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRICE:
      return action.price;
    case RESET_TEAMS:
      return initialState;
    default:
      return state;
  }
};

export default selectPriceReducers;
