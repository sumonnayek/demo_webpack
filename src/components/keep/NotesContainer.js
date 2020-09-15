import React, { Component } from 'react';
import GenericList from '../GenericList';
import NotesCard from './NotesCard';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';

export class NotesContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		const { fetchNotes } = this.props;
		fetchNotes();
	}

	render() {
		console.log(props);
		return (
			<div className='noteContainer'>{/* <GenericList renderComponent={NotesCard} /> */}</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(null, mapDispatchToProps)(NotesContainer);
