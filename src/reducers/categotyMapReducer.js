import { ADD_CATEGORY } from '../actions/todoTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CATEGORY: {
			return { ...state, [action.payload.text]: [] };
		}
		default:
			return state;
	}
};

export default reducer;
