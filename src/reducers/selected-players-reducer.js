import { ADD_NEW_PLAYER, SET_PLAYERS } from "../actions/add-new-player";
import { RESET_TEAMS } from "../actions/teams";

const initialState = [];

export const selectedPlayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PLAYER:
      return state.concat(action.newPlayer);
    case SET_PLAYERS:
      return action.players;
    case RESET_TEAMS:
      return [];
    default:
      return state;
  }
};

export default selectedPlayersReducer;
