import React from 'react';

const Cat = ({ cat }) => {
	return (
		<div className='cat'>
			<img src={cat.url} alt='cat_image' className='cat-img' />
		</div>
	);
};

export default Cat;
