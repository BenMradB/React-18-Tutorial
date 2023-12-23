import Question from './Question';
import Button from './Button';
import ProgressBar from './ProgressBar';
import { useGame } from '../contexts/GameProvider';

const Questions = () => {
	const { dispatch, questions, questionIndex, answer } = useGame();
	console.log(questions);
	console.log(questionIndex);
	const nextQuestionHandler = () => {
		dispatch({
			type: 'game/next/question',
		});
	};
	return (
		<div className='w-1/2 p-2 flex flex-col gap-4'>
			<ProgressBar />

			<Question question={questions[questionIndex]} />
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
