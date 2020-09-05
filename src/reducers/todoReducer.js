import { ADD_TODO } from '../actions/todoTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
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
