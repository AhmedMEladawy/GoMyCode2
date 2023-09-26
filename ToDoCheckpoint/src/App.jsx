import React from 'react';
import ToDoList from './components/ToDoList';

const App = () => {
	return (
		<div className="app">
			<h1 className="app-title">My Tasks</h1>
			<ToDoList />
		</div>
	);
};

export default App;