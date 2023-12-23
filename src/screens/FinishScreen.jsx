import React from 'react';
import { Button } from '../components';
import { useGame } from '../contexts/GameProvider';

const FinishScreen = () => {
	const { dispatch, playerName, score, questions } = useGame();
	const totalScore = questions.reduce(
		(acc, question) => acc + question.points,
		0
	);
	const onReplayHandler = () => {
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
