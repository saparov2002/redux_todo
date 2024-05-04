import { ADD_USER, DELETE_USER } from "./types";

const initialState = {
    todo: []
}

export const reducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_USER: return {
            todo: [...state.todo,action.todo]
        }
        case DELETE_USER: {
            const deleteIndex = state.todo.findIndex(item => item.id == action.id)
            state.todo.splice(deleteIndex,1)
            return{
                todo: [...state.todo]
            }
        }
        default: return state
    }
}