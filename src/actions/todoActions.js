import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    ADD_TODO_ID_IN_CATEGORY,
    ADD_TODO,
    CURRENT_TODO,
    CURRENT_TODO_ID,
    EDIT_TODO,
    DELETE_TODO, CREATE_TODO_REQUEST, CREATE_TODO_SUCCESS, CREATE_TODO_FAILURE
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


export function createTodo(text) {
    export const createTodoRequest = () => ({
        type: CREATE_TODO_REQUEST
    });
    
    export const createTodoSuccess = ({_id, text, completed}) => {
        return {
            type: CREATE_TODO_SUCCESS,
            payload: {
                id: _id,
                text,
                completed
            }
        };
    };
    
    export const createTodoFailure = () => ({
        type: CREATE_TODO_FAILURE
    });
    
    return dispatch => {
        dispatch(createTodoRequest());
        
/*
        return fetch(`${ROOT_URL}/todos`, {
            body: JSON.stringify({text}),
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(
                r => r.json(),
                error => {
                    console.log('An error occurred.', error);
                    dispatch(createTodoFailure());
                })
            .then(r => dispatch(createTodoSuccess(r)));
*/
/*
    write a promise which will return the below JSON:-
            {
                id: some random number,
                text,
                completed: false
            }
*/
        
    
        return fetch(`${ROOT_URL}/todos`, {
            body: JSON.stringify({text}),
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(
                r => r.json(),
                error => {
                    console.log('An error occurred.', error);
                    dispatch(createTodoFailure());
                })
            .then(r => dispatch(createTodoSuccess(r)));
    };
}
