import { storage } from "../../../storage";

const initialState = async () => {return await storage.token}

export const token = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            storage.token = action.payload
            return action.payload
        case 'LOGOUT':
            storage.token = null
            return null
        default:
            return state
    }
}