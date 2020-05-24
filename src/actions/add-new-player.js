export const ADD_NEW_PLAYER = "ADD_NEW_PLAYER";
export const SET_PLAYERS = "SET_PLAYERS";

export const addNewPlayer = (newPlayer) => ({
  type: ADD_NEW_PLAYER,
  newPlayer,
});

export const setPlayers = (players) => {
  console.log(players);
  return {
    type: SET_PLAYERS,
    players,
  };
};
