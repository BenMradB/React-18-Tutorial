import Button from './Button';

const Header = ({ imagesCounter, onIncreaseImagesCounter, onToggleList }) => {
	return (
		<div className='buttons'>
			<Button onClickHandler={onIncreaseImagesCounter}>
				+ Increase React Images In The list{' '}
			</Button>
			<p>{imagesCounter} Images In the List</p>
			<Button onClickHandler={onToggleList}>Toggle List</Button>
		</div>
	);
};

export default Header;
