import React, { Component } from 'react';
import ViewTodo from './ViewTodo';
import EditTodo from './EditTodo';
import { connect } from 'react-redux';

export class Todo extends Component {
	render() {
		console.log(this.props);
		let presentView;
		const {
			onEditTodoItem,
			activeTodoId,
			id,
			text,
			updateTodoList,
			deleteTodoText,
			updateTodoCompleted,
			completed,
		} = this.props;
		if (activeTodoId === id) {
			presentView = <EditTodo text={text} id={id} updateTodoList={updateTodoList} />;
		} else {
			presentView = (
				<ViewTodo
					text={text}
					id={id}
					updateTodoCompleted={updateTodoCompleted}
					completed={completed}
				/>
			);
		}
		return <>{presentView}</>;
	}
}

const setStateToProps = (state) => ({
	activeTodoId: state.activeTodoId,
});

export default connect(setStateToProps, null)(Todo);
