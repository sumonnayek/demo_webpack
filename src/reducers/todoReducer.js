import {
	CREATE_TODO_SUCCESS,
	DELETE_TODO_SUCCESS,
	UPDATE_TODO_COMPLETED,
	EDIT_TODO_TEXT_SUCCESS,
} from '../actions/todoTypes';

const initialState = {};

Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_TODO_SUCCESS: {
			const { payload } = action;
			return { ...state, [payload.id]: payload };
		}
		case DELETE_TODO_SUCCESS: {
			const {
				payload: { id },
			} = action;
			const todoList = { ...state };
			delete todoList[id];
			return { ...todoList };
		}
		case UPDATE_TODO_COMPLETED: {
			const {
				payload: { id },
			} = action;
			const todoList = { ...state };
			const todo = { ...todoList[id] };
			if (todo.completed == false) {
				todo.completed = true;
			} else {
				todo.completed = false;
			}
			return { ...state, [id]: todo };
		}
		case EDIT_TODO_TEXT_SUCCESS: {
			const { id, text } = action.payload;
			const todoList = { ...state };
			const todo = { ...todoList[id] };
			return { ...state, [id]: { ...todo, text } };
		}
		default:
			return state;
	}
};

export default reducer;
