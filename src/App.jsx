import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import IconsList from './components/IconsList';

const App = () => {
	const [state, setState] = useState('');
	const [imagesCounter, setImagesCounter] = useState(0);
	const [showList, setShowList] = useState(true);
	const onIncreaseImagesCounter = () => {
		setImagesCounter((curr) => curr + 1);
	};
	const onToggleList = () => {
		setShowList((curr) => !curr);
	};

	return (
		<>
			<button onClick={() => alert('Clicked')}>Click</button>
			<input
				type='text'
				value={state}
				onChange={(e) => setState(e.target.value)}
				onBlur={() => console.log('Blur')}
			/>
			<Header
				imagesCounter={imagesCounter}
				onIncreaseImagesCounter={onIncreaseImagesCounter}
				onToggleList={onToggleList}
			/>
			{showList && imagesCounter > 0 && (
				<IconsList imagesCounter={imagesCounter} />
			)}
		</>
	);
};

export default App;
