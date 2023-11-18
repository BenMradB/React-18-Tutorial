import React from 'react';
import Item from './Item';

const IconsList = ({ imagesCounter }) => {
	const images = Array.from({ length: imagesCounter }, (_, i) => i);
	return (
		<ul className='list'>
			{images.map((item, key) => (
				<Item key={key} />
			))}
		</ul>
	);
};

export default IconsList;
