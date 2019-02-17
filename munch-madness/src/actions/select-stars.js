export const SELECT_STARS = 'SELECT_STARS'

export const selectStars = ( stars ) => {
    return {
        type: SELECT_STARS,
        stars: stars,
    }
}