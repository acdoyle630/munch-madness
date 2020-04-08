//export const CLEAR_ALL = 'CLEAR_ALL'
import { selectDistance } from '../actions/select-distance'
import { selectPrice } from '../actions/select-price'
import { selectStars } from '../actions/select-stars'
import { selectGeneral } from '../actions/select-general'

export const clearAll = () => (dispatch, getState) => {
    const state=getState()
    Object.keys(state.selectedPrice).forEach((price) => {
        if(state.selectedPrice[price]) {
            dispatch(selectPrice(price))
        }
    })
    Object.keys(state.selectedStars).forEach((star) => {
        if(state.selectedStars[star]) {
            dispatch(selectStars(star))
        }
    })
    Object.keys(state.generalSelections).forEach((gen) => {
        if(state.generalSelections[gen]){
            dispatch(selectGeneral(gen))
        }
    })
    dispatch(selectDistance(''))
}