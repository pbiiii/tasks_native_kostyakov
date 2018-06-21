import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './../reducers'

const initialState = {}
const enhancers = []
const middleware= [
    thunk,
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
)

if (module.hot) {
    module.hot.accept('./../reducers', () => {
        const nextRootReducer = require('./../reducers')
        store.replaceReducer(nextRootReducer)
    })
}

export default store