export const TEAM_IS_FETCHING = 'TEAM_IS_FETCHING'
export const ADD_TEAM = 'ADD_TEAM'
export const RESET_TEAM_IS_FETCHING = 'RESET_TEAM_IS_FETCHING'
export const REMOVE_TEAM = 'REMOVE_TEAM'
export const RESET_TEAMS = 'RESET_TEAMS'


export const teamIsFetching = () => ({
    type: TEAM_IS_FETCHING,
})

export const addTeam = (team, category) => ({
    type: ADD_TEAM,
    team,
    category,
}) 

export const resetTeamIsFetching = () => ({
    type: RESET_TEAM_IS_FETCHING,
})

export const removeTeam = (category) => ({
    type: REMOVE_TEAM,
    category,
})

export const resetTeams = () => ({
    type: RESET_TEAMS
})
