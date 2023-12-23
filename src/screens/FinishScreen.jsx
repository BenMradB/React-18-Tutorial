import React from 'react';
import { Button } from '../components';

const FinishScreen = ({
	playerName,
	dispatch,
	questions,
	totalScore,
	score,
}) => {
	const onReplayHandler = () => {
		// setGameState('INITIAL');
		// setQuestions([]);
		// setAnswer(null);
		// setPlayerName('');
		// setScore(0);
		dispatch({ type: 'game/reset' });
	};
	return (
		<div className='w-full h-full flex flex-col items-center justify-start gap-10 uppercase font-bold'>
			<h1 className='text-[4rem] uppercase'>
				Congrats <span className='underline'>{playerName}</span> You
				finished the Game
			</h1>
			<h2>
				You gained {score} out of {totalScore} from {questions.length}{' '}
				questions
			</h2>
			<Button onClick={onReplayHandler}>Replay agin</Button>
		</div>
	);
};

export default FinishScreen;
