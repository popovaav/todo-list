export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const visibilityReducer = (state = visibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {
                filter: action.filter
            };
        default:
            return state;
    }
}

export const setFilter = (filter) => ({type: 'SET_VISIBILITY_FILTER', filter});