import { addNewPlayer } from '../actions/add-new-player'
import { openBracket } from '../actions/open-bracket'

export const generateTeams = () => (dispatch, getState) => {
    const state = getState()
    const categoryNames = Object.keys(state.selectedCategory).filter((cat) => {
        return state.selectedCategory[cat].selected
    })
    for( var i = 0; i < categoryNames.length; i++ ){
        const numberOfTeams = Math.round(8 / categoryNames.length)
        let selectableTeams = state.teams[categoryNames[i]].teams
        dispatch(findUniqueTeam(selectableTeams, numberOfTeams))
    }
    if(state.players.length === 8){
        dispatch(openBracket())
    }
}

const findUniqueTeam = ( teams, numberOfTeams ) => async (dispatch, getState) => {
    const state = getState()
    if(teams.length > 0 && state.players.length < 8){
        const chosenTeams = state.players
        const randomIndex = Math.floor(Math.random() * teams.length)
        if( chosenTeams.indexOf(teams[randomIndex]) === -1 ) {
            if(numberOfTeams > 0){
                await dispatch(addNewPlayer(teams[randomIndex]))
                dispatch(findUniqueTeam(teams, --numberOfTeams))
            }
        } else {
            teams.splice(randomIndex, 1)
            dispatch(findUniqueTeam(teams, numberOfTeams))
        }
    }
}