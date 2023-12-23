import { createContext, useContext, useReducer } from 'react';

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

const GameContext = createContext();

const GameProvider = ({ children }) => {
	const [
		{ gameState, playerName, questionIndex, questions, answer, score },
		dispatch,
	] = useReducer(reducer, initialState);
	return (
		<GameContext.Provider
			value={{
				gameState,
				playerName,
				questionIndex,
				questions,
				answer,
				score,
				dispatch,
			}}>
			{children}
		</GameContext.Provider>
	);
};

const useGame = () => {
	const context = useContext(GameContext);
	if (!context) {
		throw new Error(`useGame must be used within a GameProvider`);
	}

	return context;
};

export { GameProvider, useGame };
