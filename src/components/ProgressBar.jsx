import React from 'react';

const ProgressBar = ({ questions, totalScore, questionNumber, score }) => {
	return (
		<div className='flex w-full flex-col gap-2'>
			<div className='w-full flex items-center justify-between'>
				<p>
					{questionNumber + 1} / {questions.length}
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
