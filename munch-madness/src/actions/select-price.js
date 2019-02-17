export const SELECT_PRICE = 'SELECT_PRICE'

export const selectPrice = ( price ) => {
    return {
        type: SELECT_PRICE,
        price: price,
    }
}