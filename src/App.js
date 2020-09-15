import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import TodoMain from './components/todo/TodoMain';
import KeepMain from './components/keep/KeepMain';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				{/* <TodoMain /> */}
				<KeepMain />
			</div>
		</Provider>
	);
}

export default App;
