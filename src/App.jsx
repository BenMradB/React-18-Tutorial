import { useReducer, useState } from 'react';
import { FinishScreen, StartPlayScreen, InitialScreen } from './screens';
import { fetchQuestions } from './services/questions';
import { useGame } from './contexts/GameProvider';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { gameState, dispatch } = useGame();

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
					onChange={handleOnChangePlayerName}
					isLoading={isLoading}
					onFetchQuestionsHandler={onFetchQuestionsHandler}
				/>
			) : null}
			{gameState === 'STARTED' ? <StartPlayScreen /> : null}
			{gameState === 'FINISHED' ? <FinishScreen /> : null}
		</div>
	);
};

export default App;
