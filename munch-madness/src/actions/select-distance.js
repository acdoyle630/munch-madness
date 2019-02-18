export const SELECT_DISTANCE = 'SELECT_DISTANCE'

export const selectDistance = ( distance ) => {
    return {
        type: SELECT_DISTANCE,
        distance: distance,
    }
}