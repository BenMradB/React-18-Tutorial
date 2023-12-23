import React from 'react';
import { useGame } from '../contexts/GameProvider';

const ProgressBar = () => {
	const { questions, questionIndex, score } = useGame();
	const totalScore = questions.reduce(
		(acc, question) => acc + question.points,
		0
	);
	return (
		<div className='flex w-full flex-col gap-2'>
			<div className='w-full flex items-center justify-between'>
				<p>
					{questionIndex + 1} / {questions.length}
				</p>
				<p>
					{score} / {totalScore}
				</p>
			</div>
			<progress
				id='myProgress'
				className='w-full rounded-md bg-slate-950'
				value={score}
				max={totalScore}
			/>
		</div>
	);
};

export default ProgressBar;
