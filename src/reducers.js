import { combineReducers } from "redux"

const todo = (state = [], action) => {
    if (action.type === "ADD_ITEM"){
        return [...state,action.payload];
    }
    return state;
}

export default combineReducers({
    todo
})