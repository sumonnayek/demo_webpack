import { CREATE_TODO_SUCCESS, DELETE_TODO_SUCCESS } from '../actions/todoTypes';

const initialState = {};

Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));

const reducer = (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case CREATE_TODO_SUCCESS: {
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
		default:
			return state;
	}
};

export default reducer;

// Object.filter = (obj, predicate) =>
//     Object.assign(...Object.keys(obj)
//                     .filter( key => predicate(obj[key]) )
//                     .map( key => ({ [key]: obj[key] }) ) );
