import { OPEN_CHAMP_MODAL } from "../../actions/modals/champ-modal";

const initialState = {
  isOpen: false,
};

export const champModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CHAMP_MODAL:
      return {
        isOpen: true,
        champ: action.champ,
      };
    default:
      return state;
  }
};

export default champModalReducer;
