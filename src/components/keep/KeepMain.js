import React, { Component } from 'react';
import AddNotes from './AddNotes';
import NotesContainer from './NotesContainer';

export class KeepMain extends Component {
	render() {
		return (
			<div>
				<AddNotes />
				<NotesContainer />
			</div>
		);
	}
}

export default KeepMain;
