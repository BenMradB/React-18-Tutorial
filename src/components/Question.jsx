const Question = ({ question, answer, dispatch }) => {
	return (
		<div className='flex flex-col gap-4 font-normal'>
			<h2 className='text-[25px] font-semibold h-[40]'>
				{question.question}
			</h2>
			<ul className='flex flex-col gap-2 w-[100%]'>
				{question.options.map((option, key) => (
					<li
						key={key}
						className={`w-full p-3 rounded-md cursor-pointer hover:translate-x-8 duration-500 ease-in-out  ${
							answer !== null
								? key === question.correctOption
									? 'bg-green-950 pointer-events-none '
									: 'bg-red-950 pointer-events-none'
								: 'bg-slate-950'
						}
              ${answer !== null ? (key === answer ? 'translate-x-10' : '') : ''}
              `}
						onClick={() =>
							dispatch({
								type: 'game/set/answer',
								payload: key,
							})
						}>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Question;
