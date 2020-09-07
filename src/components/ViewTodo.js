import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { deleteTodo, updateTodoCompleted } from '../actions';

export class ViewTodo extends Component {
	constructor(props) {
		super(props);
	}

	deleteTodo = () => {
		const { id, category, deleteTodo } = this.props;
		deleteTodo(id, category);
	};

	updateTodoCompleted = () => {
		const { id, updateTodoCompleted } = this.props;
		updateTodoCompleted(id);
	};

	render() {
		const { category, id, text, completed, deleteTodo, updateTodoCompleted } = this.props;
		// let textClass = ['margin', 'completed'];
		// textClass = textClass.join(' ')
		return (
			<>
				<div className='itemView'>
					<div
						className={`margin ${!completed ? '' : 'completed'}`}
						onClick={() => updateTodoCompleted(id)}
					>
						{text}
					</div>
					<FontAwesomeIcon
						className='marginIcon'
						icon={faEdit}
						onClick={() => onEditTodoItem(id)}
					/>
					<FontAwesomeIcon
						className='marginIcon'
						icon={faTimes}
						onClick={() => deleteTodo(id, category)}
					/>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	category: state.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
	deleteTodo: (id, category) => dispatch(deleteTodo(id, category)),
	updateTodoCompleted: (id) => dispatch(updateTodoCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewTodo);
