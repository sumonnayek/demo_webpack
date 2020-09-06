import React, { Component } from 'react';
import AddTodo from './AddTodo';
import GenericList from './GenericList';
import Todo from './Todo';
import Category from './Category';
import AddCategory from './AddCategory';
import { connect } from 'react-redux';
import Tabs from './Tabs';

export class TodoMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// categoryIdAndTodoIdMap: {},
			// tododMap: {},
			todos: [],
			categories: [],
			loading: false,
			edit: '',
			activeTodoId: 0,
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.categoryList !== prevProps.categoryList) {
			console.log(this.props.categoryList);
		}
	}

	render() {
		let categories = [];
		let todos = [];
		const { categoryList, todoList } = this.props;
		console.log(this.props);
		categories = Object.keys(categoryList);
		todos = Object.values(todoList);
		return (
			<div>
				<AddCategory />
				<Category categories={categories} />
				<GenericList
					renderComponent={Todo}
					list={todos}
					onEditTodoItem={this.onEditTodoHandler}
					updateTodoList={this.updateTodoList}
					updateTodoCompleted={this.updateTodoCompleted}
				/>
				<AddTodo />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	categoryList: state.categoryMap,
	todoList: state.todo,
});

export default connect(mapStateToProps, null)(TodoMain);

// deleteTodoText = (id) => {
//   let tempList = this.state.todos;
//   let newTempList = tempList.filter((text) => text.id !== id);
//   this.setState({ todos: newTempList });
// };

// updateTodoList = (id, text) => {
//   console.log(id, text);
//   let tempList = this.state.todos;
//   let updatedTodoList = tempList.map((todo) => {
//     if (todo.id === id) {
//       return { ...todo, text };
//     } else {
//       return todo;
//     }
//   });
// };

// updateTodoCompleted = (id) => {
//   let tempList = this.state.todos;
//   let newList = tempList.map((todo) => {
//     if (todo.id === id && todo.completed === true) {
//       return { ...todo, completed: false };
//     } else if (todo.id === id && todo.completed === false) {
//       return { ...todo, completed: true };
//     } else {
//       return todo;
//     }
//   });
//   this.setState({
//     todos: newList,
//   });
// };
