import { useReducer, useState } from 'react';
import { FinishScreen, StartPlayScreen, InitialScreen } from './screens';
import { fetchQuestions } from './services/questions';

const initialState = {
	gameState: 'INITIAL',
	playerName: '',
	questions: [],
	answer: null,
	score: 0,
	questionIndex: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'game/set/playerName':
			return {
				...state,
				playerName: action.payload,
			};
		// INITIAL | STARTED | FINISHED
		case 'game/set/state':
			return {
				...state,
				gameState: action.payload,
			};

		case 'game/fetch/questions':
			return {
				...state,
				questions: action.payload,
				gameState: 'STARTED',
			};

		case 'game/next/question':
			return {
				...state,
				questionIndex: state.questionIndex + 1,
				answer: null,
			};

		case 'game/set/answer':
			return {
				...state,
				answer: action.payload,
				score:
					action.payload ===
					state.questions[state.questionIndex].correctOption
						? state.score +
						  state.questions[state.questionIndex].points
						: state.score,
			};
		case 'game/reset':
			return initialState;

		default:
			return initialState;
	}
};

const App = () => {
	const [
		{ gameState, playerName, questionIndex, questions, answer, score },
		dispatch,
	] = useReducer(reducer, initialState);
	const [isLoading, setIsLoading] = useState(false);
	// const [gameState, setGameState] = useState('INITIAL');
	// const [playerName, setPlayerName] = useState('');
	// const [questions, setQuestions] = useState([]);
	// const [answer, setAnswer] = useState(null);
	// const [score, setScore] = useState(0);

	const totalScore = questions.reduce(
		(acc, question) => acc + question.points,
		0
	);

	const handleOnChangePlayerName = (e) =>
		dispatch({
			type: 'game/set/playerName',
			payload: e.target.value,
		});
	const onFetchQuestionsHandler = async () => {
		setIsLoading(true);
		const data = await fetchQuestions();

		setIsLoading(false);

		dispatch({
			type: 'game/fetch/questions',
			payload: data,
		});
	};
	return (
		<div className='w-screen h-screen bg-slate-900 text-stone-200 flex justify-center p-8'>
			{gameState === 'INITIAL' ? (
				<InitialScreen
					playerName={playerName}
					onChange={handleOnChangePlayerName}
					isLoading={isLoading}
					onFetchQuestionsHandler={onFetchQuestionsHandler}
				/>
			) : null}
			{gameState === 'STARTED' ? (
				<StartPlayScreen
					questions={questions}
					playerName={playerName}
					dispatch={dispatch}
					answer={answer}
					totalScore={totalScore}
					score={score}
					questionIndex={questionIndex}
				/>
			) : null}
			{gameState === 'FINISHED' ? (
				<FinishScreen
					playerName={playerName}
					dispatch={dispatch}
					questions={questions}
					totalScore={totalScore}
					score={score}
				/>
			) : null}
		</div>
	);
};

export default App;
