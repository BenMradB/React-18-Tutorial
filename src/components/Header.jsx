import { useEffect } from 'react';
import { cats } from '../data/cats';

const Header = ({ selectedCat, setSelectedCat }) => {
	useEffect(() => {
		console.log('Header effect runs');

		return () => console.log('Clean up fct header');
	}, []);

	useEffect(() => {
		if (!selectedCat) return;
		document.title = `Cat | ${selectedCat}`;

		return () => (document.title = 'Vite + React');
	}, [selectedCat]);
	return (
		<div className='buttons'>
			<select
				type='text'
				className='cats'
				value={selectedCat}
				onChange={(e) => setSelectedCat(e)}>
				<option value=''> Select Cat </option>
				{cats.map((cat, index) => (
					<option key={index} value={cat.value}>
						{cat.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Header;
