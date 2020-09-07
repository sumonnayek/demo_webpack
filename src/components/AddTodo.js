import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo, resetActiveTodoId } from '../actions';

export class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
		this.state = {
			text: '',
		};
		// const {resetActiveId} = this.props;
	}

	generateId = () => {
		let genaratedId = Math.random().toString().substr(2, 9);
		this.setState({
			id: genaratedId,
		});
	};

	sendTextToList = () => {
		const { selectedCategory } = this.props;
		this.generateId();
		this.props.addTodo(this.state.text, selectedCategory);
		this.setState({
			text: '',
		});
	};

	componentDidMount() {
		this.inputRef.current.focus();
	}

	inputChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	render() {
		const { text } = this.state;
		return (
			<div>
				<input
					value={text}
					onChange={this.inputChange}
					ref={this.inputRef}
					type='text'
					onFocus={() => this.props.resetActiveTodoId()}
				/>
				<button onClick={this.sendTextToList}> Add </button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	selectedCategory: state.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
	addTodo: (text, selectedCategory) => dispatch(createTodo(text, selectedCategory)),
	resetActiveTodoId: () => dispatch(resetActiveTodoId()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
