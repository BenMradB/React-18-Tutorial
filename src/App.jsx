/* 
	JSX Parent Element
	how tu use js moode in JSX
	Why we need to use useState
	Syntax Of usState
	Examples Of Using usState (Counter App)
	Best Practice Of Updating the state variable
	JS native vs React useState
	Ternary Operation
*/
import React from 'react';
import Header from './components/Header';

const App = () => {
	const [counter, setCounter] = React.useState(0);

	return (
		<>
			<Header />
			<p> {counter} </p>
			<button onClick={() => setCounter(counter + 1)}>Increment</button>
		</>
	);
};

export default App;
