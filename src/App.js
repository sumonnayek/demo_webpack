import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import TodoMain from './components/TodoMain';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<TodoMain />
			</div>
		</Provider>
	);
}

export default App;

//  {
//   categories: {},
//   todoList: [],
//   loading: false,
//   activeTodoId: null,
// }
