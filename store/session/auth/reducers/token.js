const initialState = {
    token: null,
    userId: null,
}

export const token = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, token: action.payload.id, userId: action.payload.userId}
        case 'LOGOUT':
            return initialState
        case 'SET_TOKEN':
            return {...state, token: action.payload}
        default:
            return state
    }
}