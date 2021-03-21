import { addNewPlayer, setPlayers } from "../actions/add-new-player";

export const generateTeams = () => (dispatch, getState) => {
  const { selectedCategory, teams } = getState();
  const categoryNames = Object.keys(selectedCategory).filter((cat) => {
    return selectedCategory[cat].selected;
  });

  let teamList = [];
  let i = 0;

  while (teamList.length < 8) {
    const potentialTeams = teams[categoryNames[i]].teams;
    const teamLength = teams[categoryNames[i]].teams.length;
    const nextTeamIndex = Math.floor(Math.random() * teamLength);

    // TODO add  duplicate check
    teamList.push(potentialTeams[nextTeamIndex]);
    if (i < categoryNames.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }

  dispatch(setPlayers(teamList));
};
