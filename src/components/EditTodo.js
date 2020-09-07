import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTodoText } from '../actions';

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

	editTodoText = () => {
		const { text } = this.state;
		const { id, editTodoText } = this.props;
		editTodoText(id, text);
	};

	render() {
		// console.log(this.props)
		return (
			<div>
				<input value={this.state.text} onChange={this.inputChange} type='text' />
				<button onClick={this.editTodoText}> Save </button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	editTodoText: (id, text) => dispatch(editTodoText(id, text)),
});

export default connect(null, mapDispatchToProps)(EditTodo);
