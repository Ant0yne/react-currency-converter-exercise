import "./button.css";

const Button = ({
	currencyTop,
	setCurrencyTop,
	currencyBot,
	setCurrencyBot,
}) => {
	return (
		<>
			<button
				onClick={() => {
					const tempCTop = currencyTop;
					const tempCBot = currencyBot;
					setCurrencyTop(tempCBot);
					setCurrencyBot(tempCTop);
				}}>
				Swicth
			</button>
		</>
	);
};

export default Button;
