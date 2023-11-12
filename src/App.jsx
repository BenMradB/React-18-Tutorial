import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	// JSX
	console.log(<h1>Hello World</h1>);
	// Crated with Native JS
	console.log(document.createElement('h1'));

	// Building a UI using React.createElement() method
	const section = React.createElement(
		'section',
		null,
		React.createElement(
			'h1',
			{
				id: 'h1',
				className: 'h1-class',
			},
			'Hello React'
		)
	);
	return section;
}

export default App;
