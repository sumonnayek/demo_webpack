import {
	FETCH_NOTES_REQUEST,
	FETCH_NOTES_SUCCESS,
	FETCH_NOTES_FAILURE,
} from '../../actions/keepTypes';

const initialState = {};

const notes = (state = initialState, action) => {
	const {
		payload: { _id },
	} = action;
	switch (action.type) {
		case FETCH_NOTES_REQUEST:
			return {
				...state,
			};
		case FETCH_NOTES_SUCCESS:
			return {
				...state,
				_id: payload,
			};
		case FETCH_NOTES_FAILURE: {
			return {
				...state,
			};
		}
		default:
			return state;
	}
};

export default notes;
