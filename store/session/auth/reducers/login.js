const initialState = {
    loginSuccess: false,
    badCredentials: false,
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, loginSuccess: true}
        case 'BAD_CREDENTIALS':
            return {...state, badCredentials: true}
        default:
            return state
    }
}