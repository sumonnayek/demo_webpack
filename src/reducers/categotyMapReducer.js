import { ADD_CATEGORY } from '../actions/todoTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_CATEGORY: {
        return { ...state, [action.payload.text]: [] };
    }
    // case DELETE_CATEGORY: {
    //     const state = store.getState();
    //     const categoryList = state.categoryIdAndTodoIdMap
    // }

    default:
        return state;
    }
};

export default reducer;
