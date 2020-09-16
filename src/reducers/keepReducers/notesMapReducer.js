import {
	FETCH_NOTES_REQUEST,
	FETCH_NOTES_SUCCESS,
	FETCH_NOTES_FAILURE,
} from '../../actions/keepTypes';

const initialState = {};

const notes = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NOTES_SUCCESS:
			const {
				payload: { notesList },
			} = action;
			console.log(notesList);
			return {
				...state,
				...notesList,
			};
		default:
			return state;
	}
};

export default notes;
