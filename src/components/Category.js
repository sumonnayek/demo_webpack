import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentCategory } from '../actions';

export class Category extends Component {
	constructor(props) {
		super(props);
	}

	setCurrentCategory = (e) => {
		this.props.setCurrentCategory(e.target.value);
	};

	render() {
		const { categories = [], currentCategory = '' } = this.props;
		return (
			<div>
				<label>
					Categories
					<select
						name='Categories'
						id=''
						onChange={this.setCurrentCategory}
						value={currentCategory}
					>
						{categories?.map((category) => (
							<option value={category} key={category}>
								{category}
							</option>
						))}
					</select>
				</label>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentCategory: (category) => dispatch(currentCategory(category)),
});

const mapStateToProps = (state) => ({
	currentCategory: state.selectedCategory,
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
