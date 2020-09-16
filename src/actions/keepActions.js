import { FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS, FETCH_NOTES_FAILURE } from './keepTypes';

export const fetchNotes = () => {
	const fetchNotesRequest = () => ({
		type: FETCH_NOTES_REQUEST,
	});

	const fetchNotesSuccess = (notesList) => ({
		type: FETCH_NOTES_SUCCESS,
		payload: { notesList },
	});

	const fetchNotesFailure = (error) => ({
		type: FETCH_NOTES_FAILURE,
		payload: { error },
	});
	return (dispatch) => {
		dispatch(fetchNotesRequest());
		fetch('http://localhost:5000/notes')
			.then((response) => response.json())
			.then((data) => {
				let obj = {};
				data.map(({_id: id, ...rest}) => (obj[id] = {...rest, id}));
				return obj;
			})
			// .then(console.log)
			.then((data) => {
				dispatch(fetchNotesSuccess(data));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchNotesFailure(errorMsg));
			});
	};
};

/* {
	notesMap: {
		noteId: {
					noteId: id,
					title: '',
					note: ''			
		}},
	categoryMap: {
		categoryId: {
			id: id
			text: '',
			notesIdArray: []
			}
	},
	activeCategory: '',
	activeNoteId: '';

}*/
