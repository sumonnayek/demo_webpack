import { combineReducers } from 'redux';
import categoryMapReducer from './categotyMapReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
	categoryMap: categoryMapReducer,
	todo: todoReducer,
});

export default rootReducer;
