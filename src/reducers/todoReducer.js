import { CREATE_TODO_SUCCESS } from '../actions/todoTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_TODO_SUCCESS: {
			const {
				payload: { todo },
			} = action;
			return { ...state, [todo.id]: todo };
		}
		default:
			return state;
	}
};

export default reducer;
