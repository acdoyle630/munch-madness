import {
  SELECT_CATEGORY,
  DISABLE_CATEGORY,
  RESET_CATEGORIES,
} from "../actions/select-category";

const initialState = {
  pizza: {
    selected: false,
    available: true,
  },
  sandwich: {
    selected: false,
    available: true,
  },
  sushi: {
    selected: false,
    available: true,
  },
  burger: {
    selected: false,
    available: true,
  },
  chinese: {
    selected: false,
    available: true,
  },
  chicken: {
    selected: false,
    available: true,
  },
  thai: {
    selected: false,
    available: true,
  },
  tacos: {
    selected: false,
    available: true,
  },
  healthy: {
    selected: false,
    available: true,
  },
  indian: {
    selected: false,
    available: true,
  },
  ramen: {
    selected: false,
    available: true,
  },
  add: {
    selected: false,
    available: true,
  },
};

export const selectCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return Object.assign({}, state, {
        [action.category]: {
          selected: !state[action.category].selected,
          available: true,
        },
      });
    case DISABLE_CATEGORY:
      return Object.assign({}, state, {
        [action.category]: {
          selected: false,
          available: false,
        },
      });
    case RESET_CATEGORIES:
      return initialState;
    default:
      return state;
  }
};

export default selectCategoryReducer;
