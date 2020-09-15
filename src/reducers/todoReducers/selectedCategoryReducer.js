import { SELECT_CATEGORY } from '../../actions/todoTypes';

const initialState = '';

const selectedCategoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_CATEGORY: {
			const { payload } = action;
			return payload.category;
		}
		default:
			return state;
	}
};

export default selectedCategoryReducer;
