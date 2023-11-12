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
import { useState } from 'react';
import Header from './components/Header';

const App = () => {
	const [counter, setCounter] = useState(0);
	const [isEnabled, setIsEnabled] = useState(false);
	// If state value depends on the current state value
	// setCounter((curr) => curr + 1)
	// If not
	// setCounter()

	return (
		<>
			<Header />
			<p> {counter} </p>
			<button onClick={() => setCounter((curr) => curr + 1)}>
				Increment
			</button>
			<button onClick={() => setIsEnabled(true)}>Enable</button>
		</>
	);
};

export default App;
