import { combineReducers } from 'redux'
import { reducer as auth } from "../store/session/auth";
import { tasks } from "../store/tasks/reducers";
import { editTask } from "../store/tasks/reducers";

export default combineReducers({
    auth,
    tasks,
    editTask,
})