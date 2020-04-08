export const SELECT_GENERAL = 'SELECT_GENERAL'

export const selectGeneral = ( selector ) => {
    return {
        type: SELECT_GENERAL,
        selector: selector
    }
}