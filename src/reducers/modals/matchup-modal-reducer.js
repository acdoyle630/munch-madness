import {
  CLOSE_MATCHUP_MODAL,
  OPEN_MATCHUP_MODAL,
} from "../../actions/modals/matchup-modal";

const initialState = {
  isOpen: false,
};

export const matchupModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MATCHUP_MODAL:
      return {
        isOpen: true,
      };
    case CLOSE_MATCHUP_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default matchupModalReducer;
