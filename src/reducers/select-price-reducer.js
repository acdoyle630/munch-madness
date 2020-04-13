import { SELECT_PRICE } from "../actions/select-price";

const initialState = null;

export const selectPriceReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRICE:
      return action.price;
    default:
      return state;
  }
};

export default selectPriceReducers;
