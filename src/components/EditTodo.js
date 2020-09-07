import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTodoText, resetActiveTodoId } from '../actions';

export class EditTodo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: this.props.text,
		};
	}

	inputChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	editTodoText = async () => {
		const { text } = this.state;
		const { id, editTodoText, resetActiveTodoId } = this.props;
		await editTodoText(id, text);
		resetActiveTodoId();
	};

	render() {
		// console.log(this.props)
		return (
			<div>
				<input value={this.state.text} onChange={this.inputChange} type='text' />
				<button onClick={this.editTodoText}> Save </button>
				<button onClick={() => this.props.resetActiveTodoId()}>X</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	editTodoText: (id, text) => dispatch(editTodoText(id, text)),
	resetActiveTodoId: () => dispatch(resetActiveTodoId()),
});

export default connect(null, mapDispatchToProps)(EditTodo);
