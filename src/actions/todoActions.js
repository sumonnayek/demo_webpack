import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    ADD_TODO_ID_IN_CATEGORY,
    ADD_TODO,
    CURRENT_TODO,
    CURRENT_TODO_ID,
    EDIT_TODO,
    DELETE_TODO
} from './todoTypes';
import store from "../store";

export const addCategory = text => ({
    type: ADD_CATEGORY,
    payload: { text }
});

export const deleteCategory = text => ({
    type: DELETE_CATEGORY,
    payload: { text }
});

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: { todo }
})

export const addTodoRequest = todo => ({
    type: ADD_TODO,
    payload: { todo }
});

export const addTodoSuccess = todo => ({
    type: ADD_TODO,
    payload: { todo }
});

export const addTodoError = todo => ({
    type: ADD_TODO,
    payload: { todo }
});
