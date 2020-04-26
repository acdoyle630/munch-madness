import {
  CLOSE_ROUND_MODAL,
  OPEN_ROUND_MODAL,
} from "../../actions/modals/round-modal";

const initialState = {
  isOpen: false,
};

export const roundModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ROUND_MODAL:
      return {
        ...state,
        isOpen: true,
        round: action.round,
      };
    case CLOSE_ROUND_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default roundModalReducer;
