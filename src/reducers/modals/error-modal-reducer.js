import {
  CLOSE_ERROR_MODAL,
  OPEN_ERROR_MODAL,
} from "../../actions/modals/error-modal";

const initialState = {
  isOpen: false,
};

export const errorModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ERROR_MODAL:
      return {
        ...state,
        isOpen: true,
        header: action.header,
        message: action.message,
      };
    case CLOSE_ERROR_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default errorModalReducer;
