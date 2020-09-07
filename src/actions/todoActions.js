import {
	ADD_CATEGORY,
	SELECT_CATEGORY,
	CREATE_TODO_REQUEST,
	CREATE_TODO_SUCCESS,
	CREATE_TODO_FAILURE,
	DELETE_TODO_REQUEST,
	DELETE_TODO_SUCCESS,
	DELETE_TODO_FAILURE,
	UPDATE_TODO_COMPLETED,
	SET_ACTIVE_TODO_ID,
	EDIT_TODO_TEXT_REQUEST,
	EDIT_TODO_TEXT_SUCCESS,
	EDIT_TODO_TEXT_FAILURE,
	RESET_ACTIVE_TODO_ID,
} from './todoTypes';

export const addCategory = (text) => ({
	type: ADD_CATEGORY,
	payload: { text },
});

export const currentCategory = (category) => ({
	type: SELECT_CATEGORY,
	payload: { category },
});

export function createTodo(text, category) {
	const createTodoRequest = () => ({
		type: CREATE_TODO_REQUEST,
	});

	const createTodoSuccess = ({ id, text, completed, category }) => {
		return {
			type: CREATE_TODO_SUCCESS,
			payload: {
				id,
				text,
				completed,
				category,
			},
		};
	};

	const createTodoFailure = () => ({
		type: CREATE_TODO_FAILURE,
	});

	return (dispatch) => {
		dispatch(createTodoRequest());
		const id = Math.random().toString().substr(2, 9);
		let promise = new Promise((resolve, reject) => {
			resolve({ id, text, completed: false, category });
		});
		promise.then(
			(response) => {
				dispatch(createTodoSuccess(response));
			},
			() => {
				dispatch(createTodoFailure());
			}
		);
	};
}

export function deleteTodo(id, category) {
	const deleteTodoRequest = () => ({
		type: DELETE_TODO_REQUEST,
	});

	const deleteTodoSuccess = ({ id, category }) => ({
		type: DELETE_TODO_SUCCESS,
		payload: { id, category },
	});

	const deleteTodoFailure = () => ({
		type: DELETE_TODO_FAILURE,
	});

	return (dispatch) => {
		dispatch(deleteTodoRequest());
		let promise = new Promise((resolve, reject) => {
			resolve({ id, category });
		});
		promise.then(
			(response) => {
				dispatch(deleteTodoSuccess(response));
			},
			() => {
				dispatch(deleteTodoFailure());
			}
		);
	};
}

export const updateTodoCompleted = (id) => ({
	type: UPDATE_TODO_COMPLETED,
	payload: { id },
});

export const setActiveTodoId = (id) => ({
	type: SET_ACTIVE_TODO_ID,
	payload: { id },
});

export function editTodoText(id, text) {
	const editTodoTextRequest = () => ({
		type: EDIT_TODO_TEXT_REQUEST,
	});

	const editTodoTextSuccess = ({ id, text }) => ({
		type: EDIT_TODO_TEXT_SUCCESS,
		payload: { id, text },
	});

	const editTodoTextFailure = () => ({
		type: EDIT_TODO_TEXT_FAILURE,
	});

	return (dispatch) => {
		dispatch(editTodoTextRequest());
		let promise = new Promise((resolve, reject) => {
			resolve({ id, text });
		});
		promise.then(
			(response) => {
				dispatch(editTodoTextSuccess(response));
			},
			() => {
				dispatch(editTodoTextFailure());
			}
		);
	};
}

export const resetActiveTodoId = () => ({
	type: RESET_ACTIVE_TODO_ID,
});
