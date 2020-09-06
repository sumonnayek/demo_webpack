import { combineReducers } from 'redux';
import categoryMapReducer from './categotyMapReducer';
import todoReducer from './todoReducer';
import selectedCategoryReducer from './selectedCategoryReducer';

const rootReducer = combineReducers({
	categoryMap: categoryMapReducer,
	todo: todoReducer,
	selectedCategory: selectedCategoryReducer,
});

export default rootReducer;
