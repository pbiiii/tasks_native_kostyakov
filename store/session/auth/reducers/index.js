import {combineReducers} from 'redux'
import {register} from './register'
import {login} from './login'
import {token} from './token'
import {user} from './user'

export const reducer = combineReducers({
    register,
    login,
    token,
    user,
})

