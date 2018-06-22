const initialState = null

export const token = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.payload
        case 'LOGOUT':
            return null
        case 'SET_TOKEN':
            return action.payload
        default:
            return state
    }
}