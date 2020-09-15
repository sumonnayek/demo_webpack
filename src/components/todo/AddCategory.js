import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory, currentCategory } from '../../actions';

export class AddCategory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
		};
	}

	inputChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	addCategoryToList = async () => {
		const { text } = this.state;
		const { addCategory, setCurrentCategory } = this.props;
		await addCategory(text);
		setCurrentCategory(text);
		this.setState({ text: '' });
	};

	render() {
		return (
			<div>
				<input type='text' onChange={this.inputChange} value={this.state.text} />
				<button onClick={this.addCategoryToList}>Add Category</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addCategory: (text) => dispatch(addCategory(text)),
	setCurrentCategory: (category) => dispatch(currentCategory(category)),
});

export default connect(null, mapDispatchToProps)(AddCategory);
