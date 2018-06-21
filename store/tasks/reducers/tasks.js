import {removeTask, updateTask} from "./helpers";

const initialState = []


export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'TASKS_FETCHED':
            return action.payload
        case 'TASK_ADDED':
            state.unshift(action.payload)
            return [].concat(state)
        case 'TASK_DELETED':
            return removeTask(state, action.payload)
        case 'TASK_COMPLETED':
            return updateTask(state, action.payload)
        case 'TASK_UPDATED':
            return updateTask(state, action.payload)
        default:
            return state
    }
}