import React, { Component } from 'react';
import './App.css';

import Overview from './Overview.js';
import uniqid from 'uniqid';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			task: { 
        text: '',
        id: uniqid()
      },
			tasks: [],
		};
	}

	// additional functions go here

	handleChange = (e) => {
		this.setState({
			task: {
				text: e.target.value,
				id: this.state.task.id,
			},
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: {
				text: '',
				id: uniqid(),
			},
		});
	};

	render() {
		const { task, tasks } = this.state;

		return (
			<div>
				<h2>Add a task</h2>
				<form onSubmit={this.onSubmitTask}>
					<label htmlFor="taskDesc"></label>
					<input
						onChange={this.handleChange}
						value={task.text}
						type="text"
						id="taskDesc"
					></input>
					<button type="submit">Submit</button>
				</form>
        		<Overview tasks={tasks} />
			</div>
		);
	}

}

export default App;
