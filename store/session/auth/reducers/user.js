const initialState = {
    name: '',
    email: '',
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return {...action.payload}
        default:
            return state
    }
}