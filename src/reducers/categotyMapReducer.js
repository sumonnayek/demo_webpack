import { ADD_CATEGORY, DELETE_CATEGORY } from "../actions/todoTypes";
import store from "../store";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY: {
        console.log(action.payload);
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
