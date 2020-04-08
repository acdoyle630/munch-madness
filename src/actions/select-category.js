export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const DISABLE_CATEGORY = 'DISABLE_CATEGORY'
export const RESET_CATEGORIES = 'RESET_CATEGORIES'

export const selectCategory = (category) => ({
    type: SELECT_CATEGORY,
    category,
})

export const disableCategory = (category) => ({
    type: DISABLE_CATEGORY,
    category,
})

export const resetCategories = () => ({
    type: RESET_CATEGORIES,
})