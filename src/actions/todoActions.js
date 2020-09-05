import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  ADD_TODO_ID_IN_CATEGORY,
  ADD_TODO,
  CURRENT_TODO,
  CURRENT_TODO_ID,
  EDIT_TODO,
  DELETE_TODO,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
} from "./todoTypes";
import store from "../store";

export const addCategory = (text) => ({
  type: ADD_CATEGORY,
  payload: { text },
});

export const deleteCategory = (text) => ({
  type: DELETE_CATEGORY,
  payload: { text },
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const addTodoRequest = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const addTodoError = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

export function createTodo(text) {
  const createTodoRequest = () => ({
    type: CREATE_TODO_REQUEST,
  });

  const createTodoSuccess = ({ _id, text, completed }) => {
    return {
      type: CREATE_TODO_SUCCESS,
      payload: {
        id: _id,
        text,
        completed,
      },
    };
  };

  const createTodoFailure = () => ({
    type: CREATE_TODO_FAILURE,
  });

  return async (dispatch) => {
    dispatch(createTodoRequest());
    const id = Math.random().toString().substr(2, 9);
    let promise = new Promise((resolve, reject) => {
      resolve({ id, text, completed: false });
    });
    promise.then(
      (response) => {
        dispatch(createTodoSuccess(response));
      },
      (err) => {
        dispatch(createTodoFailure());
      }
    );
  };
}
