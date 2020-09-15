import React, { Component } from 'react';

export class AddNotes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			note: '',
		};
	}
	inputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value,
		});
	};
	addNote = (note) => {
		fetch(`http://localhost:5000/notes`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(note),
		});
	};

	// addNote = (note) => {
	// 	let n = JSON.stringify(note);
	// 	return new Promise((resolve, reject) => {
	// 		let req = new XMLHttpRequest();
	// 		req.open('POST', `http://localhost:5000/notes`);
	// 		req.setRequestHeader('Content-Type', 'application/json');
	// 		req.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
	// 		req.onload = function () {
	// 			if (req.status === 200) {
	// 				resolve(req.response);
	// 			} else {
	// 				reject(Error(req.statusText));
	// 			}
	// 		};
	// 		req.onerror = function () {
	// 			reject(Error('Network Error'));
	// 		};
	// 		req.send(JSON.stringify(note));
	// 	});
	// };

	onSubmit = (e) => {
		e.preventDefault();
		this.addNote(this.state);
	};
	render() {
		return (
			<div className='addNoteCard'>
				<form onSubmit={this.onSubmit}>
					<input
						type='text'
						name='title'
						placeholder='Title'
						onChange={this.inputChange}
					/>
					<input
						type='text'
						name='note'
						placeholder='Take a note:'
						onChange={this.inputChange}
					/>
					<div className='addNotesButtonsDiv'>
						<input type='submit' value='Save' />
						<button>Cancel</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddNotes;
