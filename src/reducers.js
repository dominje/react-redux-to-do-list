import { combineReducers } from "redux"

const todo = (state = [], action) => {
    if (action.type === "ADD_ITEM"){
        return [...state,action.payload];
    }
    if (action.type === "UPDATE_ITEM"){
        return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
    }
    if (action.type === "DELETE_ITEM"){
        return state.filter(todo => todo.id !== action.payload);
    }
    return state;
}

export default combineReducers({
    todo
})