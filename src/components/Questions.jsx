import Question from './Question';
import Button from './Button';
import ProgressBar from './ProgressBar';
import { useState } from 'react';

const Questions = ({
	questions,
	dispatch,
	answer,
	totalScore,
	score,
	questionIndex,
}) => {
	const nextQuestionHandler = () => {
		dispatch({
			type: 'game/next/question',
		});
	};
	return (
		<div className='w-1/2 p-2 flex flex-col gap-4'>
			<ProgressBar
				questionNumber={questionIndex}
				totalScore={totalScore}
				questions={questions}
				score={score}
			/>
			<Question
				question={questions[questionIndex]}
				answer={answer}
				dispatch={dispatch}
			/>
			{answer !== null ? (
				questionIndex < questions.length - 1 ? (
					<Button onClick={nextQuestionHandler}>Next</Button>
				) : (
					<Button
						onClick={() =>
							dispatch({
								type: 'game/set/state',
								payload: 'FINISHED',
							})
						}>
						Finish
					</Button>
				)
			) : null}
		</div>
	);
};

export default Questions;
