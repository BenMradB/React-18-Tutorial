import { Questions } from '../components';
import { useGame } from '../contexts/GameProvider';

const StartPlayScreen = () => {
	const { playerName } = useGame();
	return (
		<div className='w-full h-full flex flex-col items-center justify-start gap-10 uppercase font-bold'>
			<h1 className='text-[3rem]'>
				Welcome to the react quiz app{' '}
				<span className='underline'>{playerName}</span>
			</h1>
			<Questions />
		</div>
	);
};

export default StartPlayScreen;
