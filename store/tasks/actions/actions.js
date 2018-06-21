import * as types from './actionTypes'
import { client } from '../../../core/api'


export const fetchTasksAction = () => {
    return (dispatch) => {
        client.get('/tasks')
            .then(({data}) => {
                dispatch({
                    type: types.TASKS_FETCHED,
                    payload: data
                })
            })
            .catch(({response}) => {
                const { status } = response
                if (status === 401) {
                    dispatch({
                        type: types.BAD_CREDENTIALS,
                        payload: false
                    })
                }
            })
    }
}

export const addTaskAction = (taskData) => {
    return (dispatch) => {
        client.post('/tasks', taskData)
            .then(({data}) => {
                dispatch({
                    type: types.TASK_ADDED,
                    payload: data
                })
            })
    }
}

export const deleteTaskAction = (task) => {
    return (dispatch) => {
        client.delete(`/tasks/${task.id}`)
            .then(() => {
                dispatch({
                    type: types.TASK_DELETED,
                    payload: task
                })
            })
    }
}

export const changeTaskDoneStatusAction = (task, done) => {
    return (dispatch) => {
        client.patch(`/tasks/${task.id}`, {done})
            .then(({data}) => {
                dispatch({
                    type: types.TASK_COMPLETED,
                    payload: data
                })
            })
    }
}

export const openEditTaskModalAction = (task) => {
    return (dispatch) => {
        dispatch({
            type: types.OPEN_EDIT_TASK_MODAL,
            payload: task
        })
    }
}

export const closeEditTaskModalAction = () => {
    return (dispatch) => {
        dispatch({
            type: types.CLOSE_EDIT_TASK_MODAL,
            payload: null
        })
    }
}

export const changeTaskEditForm = (task) => {
    return (dispatch) => {
        dispatch({
            type: types.CHANGE_TASK_EDIT_FORM,
            payload: task
        })
    }
}

export const updateTaskAction = (task) => {
    return (dispatch) => {
        client.patch(`/tasks/${task.id}`, task)
            .then(({data}) => {
                dispatch({
                    type: types.TASK_UPDATED,
                    payload: data
                })
                dispatch({
                    type: types.CLOSE_EDIT_TASK_MODAL,
                    payload: null
                })
            })
    }
}