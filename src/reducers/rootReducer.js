import { combineReducers } from 'redux';
import categoryMapReducer from './todoReducers/categoryMapReducer';
import todoReducer from './todoReducers/todoReducer';
import selectedCategoryReducer from './todoReducers/selectedCategoryReducer';
import activeTodoIdReducer from './todoReducers/activeTodoIdReducer';
import notesMapReducer from './keepReducers/notesMapReducer';

const rootReducer = combineReducers({
	categoryMap: categoryMapReducer,
	todo: todoReducer,
	selectedCategory: selectedCategoryReducer,
	activeTodoId: activeTodoIdReducer,
	notesMap: notesMapReducer,
});

export default rootReducer;
