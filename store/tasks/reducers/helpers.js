export const removeTask = (tasksList, taskToDelete) => {
    let match;
    match = tasksList.findIndex((task) => {
        return task.id === taskToDelete.id
    })
    if(match >= 0) {
        tasksList.splice(match, 1)
    }
    return [].concat(tasksList);
}

export const updateTask = (tasksList, taskToUpdate) => {
    let match = tasksList.findIndex((task) => {
        return task.id === taskToUpdate.id
    })
    if(match >= 0) {
        tasksList[match] = taskToUpdate
    }
    return [].concat(tasksList);
}