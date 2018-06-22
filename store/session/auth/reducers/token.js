import { storage } from "../../../storage";

const initialState = null

export const token = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            storage.token = action.payload
            return action.payload
        case 'LOGOUT':
            return null
        default:
            return state
    }
}