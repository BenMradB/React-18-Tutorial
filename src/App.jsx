import './App.css';
import Header from './components/Header';
import Cat from './components/Cat';
import Axios from 'axios';
import { useEffect, useState } from 'react';
const CATS_BASE_URL = `https://api.thecatapi.com/v1/images/search`;

const App = () => {
	const [selectedCat, setSelectedCat] = useState('');
	const [fetchedCat, setFetchedCat] = useState(null);
	const [display, setDisplay] = useState(true);

	const onSelectedCatHandler = (e) => {
		setSelectedCat(e.target.value);
	};

	useEffect(() => {
		const fetchCats = async () => {
			const { data } = await Axios.get(
				`${CATS_BASE_URL}?breed_ids=${selectedCat}`
			);
			setFetchedCat(data[0]);
		};

		selectedCat && fetchCats();
	}, [selectedCat]);

	// useEffect(() => {
	// 	console.log(selectedCat);
	// 	console.log('useEffect Runs');
	// });

	return (
		<>
			<button onClick={() => setDisplay((curr) => !curr)}>
				Hide select{' '}
			</button>
			{display && (
				<Header
					selectedCat={selectedCat}
					setSelectedCat={onSelectedCatHandler}
				/>
			)}
			{fetchedCat && <Cat cat={fetchedCat} />}
		</>
	);
};

export default App;
