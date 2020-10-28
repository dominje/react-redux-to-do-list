export const addToDo = todo => {
    return {type: "ADD_ITEM", payload: todo};
}

export const updateToDo = id => {
    return {type: "UPDATE_ITEM", payload: id};
}

export const deleteToDo = id => {
    return {type: "DELETE_ITEM", payload: id};
}

export const initToDo = todos => {
    return {type: "INIT_TODO", payload: todos};
}