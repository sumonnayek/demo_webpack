import { ADD_TODO, DELETE_TODO } from "../actions/todoTypes";
import store from "../store";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
        const {id} = action.payload.todo
        console.log(action.payload);
      return { ...state, [id]: action.payload.todo };
    }
    // case DELETE_TODO: {
    //     const state = store.getState();
    // }

    default:
      return state;
  }
};

export default reducer;
