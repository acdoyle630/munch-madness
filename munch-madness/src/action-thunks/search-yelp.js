import { buildPayload } from '../helpers/build-payload'
import { 
    teamIsFetching,
    addTeam,
    resetTeamIsFetching } from '../actions/teams'
import { disableCategory } from '../actions/select-category'
import { search } from '../services/yelp'

export const searchYelp = (category) => async (dispatch, getState) => {
    dispatch(teamIsFetching())
    const state = getState()
    const payload = buildPayload(
        category,
        state.selectedPrice,
        state.selectedDistance,
        state.generalSelections
    )
    try {
        const result = await search(payload)
        if(result){
            dispatch(addTeam(result, category))
        } else {
            dispatch(disableCategory(category))
        }
    } catch(error) {
        console.log(`Cannot find for category ${category}`)
        dispatch(disableCategory(category))
        dispatch(resetTeamIsFetching())
    }
    
}