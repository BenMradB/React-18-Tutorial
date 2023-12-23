import React from 'react';
import { Button } from '../components';
import Loader from '../components/Loader';

const InitialScreen = ({
	playerName,
	onChange,
	isLoading,
	onFetchQuestionsHandler,
}) => {
	return (
		<div className='w-full h-full flex flex-col items-center justify-start gap-10 uppercase font-bold'>
			<h1 className='text-[4rem]'>Welcome to the react quiz app</h1>
			<input
				type='text'
				value={playerName}
				onChange={(e) => onChange(e)}
				placeholder='Start the game by telling us your name'
				className='w-1/2 p-2 bg-transparent border-2 border-stone-200 rounded-md outline-none'
			/>
			{!playerName ? null : (
				<Button
					styling={` ${
						isLoading ? 'cursor-not-allowed' : ''
					} w-1/2 py-4 bg-stone-200 text-slate-900 text-2xl rounded-md hover:bg-stone-300 duration-300 font-semibold uppercase`}
					onClick={onFetchQuestionsHandler}
					isDisabled={isLoading}>
					<span>Start the game</span>
				</Button>
			)}

			{isLoading ? <Loader /> : null}
		</div>
	);
};

export default InitialScreen;
