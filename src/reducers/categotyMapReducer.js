import { ADD_CATEGORY, CREATE_TODO_SUCCESS, DELETE_TODO_SUCCESS } from '../actions/todoTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CATEGORY: {
			return { ...state, [action.payload.text]: [] };
		}
		case CREATE_TODO_SUCCESS: {
			const {
				payload: { id: todoId, category: categoryId },
			} = action;
			const categoryTodoIdList = state[categoryId];
			return { ...state, [categoryId]: [...categoryTodoIdList, todoId] };
		}
		case DELETE_TODO_SUCCESS: {
			const {
				payload: { category },
			} = action;
			const categoryTodoIdList = state[category];
			const newList = categoryTodoIdList.filter((id) => id !== action.payload.id);
			return { ...state, [category]: newList };
		}
		default:
			return state;
	}
};

export default reducer;
