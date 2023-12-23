import { Questions } from '../components';

const StartPlayScreen = ({
	questions,
	playerName,
	dispatch,
	answer,
	totalScore,
	score,
	questionIndex,
}) => {
	return (
		<div className='w-full h-full flex flex-col items-center justify-start gap-10 uppercase font-bold'>
			<h1 className='text-[3rem]'>
				Welcome to the react quiz app{' '}
				<span className='underline'>{playerName}</span>
			</h1>
			<Questions
				score={score}
				questions={questions}
				dispatch={dispatch}
				answer={answer}
				totalScore={totalScore}
				questionIndex={questionIndex}
			/>
		</div>
	);
};

export default StartPlayScreen;
