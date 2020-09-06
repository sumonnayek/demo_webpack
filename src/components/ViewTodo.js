import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

export class ViewTodo extends Component {
	constructor(props) {
		super(props);
	}

	deleteTodo = () => {
		const { id, category } = this.props;
		this.props.deleteTodo(id, category);
	};

	render() {
		const { category, id, text, updateTodoCompleted, completed, deleteTodo } = this.props;
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
						onClick={this.deleteTodo}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewTodo);
