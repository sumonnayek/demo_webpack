import { SET_ACTIVE_TODO_ID } from '../actions/todoTypes';

const initialState = 0;

const activeTodoId = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_TODO_ID: {
			return action.payload.id;
		}
		default:
			return state;
	}
};

export default activeTodoId;
