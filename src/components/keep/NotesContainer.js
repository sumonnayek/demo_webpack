import React, { Component } from 'react';
import GenericList from '../GenericList';
import NotesCard from './NotesCard';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';

export class NotesContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { fetchNotes: fetchNotesInProps } = this.props;
		fetchNotesInProps();
	}

	render() {
		console.log(this.props);
		const { notesMap = {} } = this.props;
		let notesList = [];
		notesList = Object.values(notesMap);
		let list = [];
		for (let i = 0; i < notesList.length; i++) {}
		return (
			<div className='noteContainer'>
				<GenericList renderComponent={NotesCard} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchNotes: () => dispatch(fetchNotes()),
});

const mapStateToProps = (state) => ({
	notesMap: state.notesMap,
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
