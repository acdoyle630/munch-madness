import { 
    TEAM_IS_FETCHING,
    ADD_TEAM,
    RESET_TEAM_IS_FETCHING,
    REMOVE_TEAM,
    RESET_TEAMS } from '../actions/teams'

const initialState = {
    pizza: {
        teams: []
    },
    sandwich: {
        teams: []
    }, 
    sushi: {
        teams: []
    },
    'fast food': {
        teams: []
    },
    Chinese: {
        teams: []
    },
    pho: {
        teams: []
    },
    thai: {
        teams: []
    },
    Italian: {
        teams: []
    },
    Mexican: {
        teams: []
    },
    'food trucks': {
        teams: []
    },
    buffet: {
        teams: []
    },
    tapas: {
        teams: []
    },
    isFetching: false,
}

export const teamsReducer = (state = initialState, action) =>{
    switch(action.type){
      case TEAM_IS_FETCHING:
        return Object.assign({}, state, {
            isFetching: true
        })
      case ADD_TEAM:
        // const teamWithCategory = Object.assign({}, action.team, {
        //     category: action.category
        // })
        // const allTeams = state.teams.concat(teamWithCategory)
        return Object.assign({}, state, {
            [action.category]: {
                teams: action.teams
            },
            isFetching: false,
        })
      case RESET_TEAM_IS_FETCHING:
        return Object.assign({}, state, {
            isFetching: false,
        })
      case REMOVE_TEAM:
        // const removedTeams = state.teams.filter((team) => {
        //     return team.category !== action.category
        // })
        return Object.assign({}, state, {
            [action.category]: {
                teams: []
            },
        })
      case RESET_TEAMS:
        return initialState
      default : return state;
    }
  }
  
  export default teamsReducer
  