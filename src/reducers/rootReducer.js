import { combineReducers } from 'redux';
import categoryMapReducer from './categotyMapReducer';
import todoReducer from './todoReducer';
import selectedCategoryReducer from './selectedCategoryReducer';
import activeTodoIdReducer from './activeTodoIdReducer';

const rootReducer = combineReducers({
	categoryMap: categoryMapReducer,
	todo: todoReducer,
	selectedCategory: selectedCategoryReducer,
	activeTodoId: activeTodoIdReducer,
});

export default rootReducer;
