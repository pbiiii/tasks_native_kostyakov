/**@flow**/
import {AsyncStorage} from "react-native";

const resolveStorage = () => {
    if (typeof localStorage !== 'undefined') {
        return localStorage
    } else if (typeof AsyncStorage !== 'undefined') {
        return AsyncStorage
    }
    return null
}

export const storage = {
    get token(): Promise<String> {
        return resolveStorage().getItem('token')
    },
    set token(token) {
        return resolveStorage().setItem('token', token)
    }
}