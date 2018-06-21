const initialState = {
    registerSuccess: false,
    userAlreadyExists: false,
}

export const register = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return {...state, registerSuccess: true}
        case 'USER_ALREADY_EXISTS':
            return {...state, userAlreadyExists: true}
        default:
            return state
    }
}