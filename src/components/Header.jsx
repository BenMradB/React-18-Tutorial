import { cats } from '../data/cats';

const Header = ({ selectedCat, setSelectedCat }) => {
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
