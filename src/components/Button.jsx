const Button = ({ styling = '', onClick, isDisabled, children }) => {
	return (
		<button
			className={`w-1/4 rounded-md  py-2 bg-stone-200 text-slate-900 hover:bg-stone-300 duration-300 ${styling}`}
			onClick={onClick}
			disabled={isDisabled}>
			{children}
		</button>
	);
};

export default Button;
