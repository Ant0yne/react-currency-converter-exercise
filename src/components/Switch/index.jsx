import "./switch.css";

const Switch = ({
	currencyTop,
	setCurrencyTop,
	currencyBot,
	setCurrencyBot,
}) => {
	const handleSwitch = () => {
		const tempCTop = currencyTop;
		const tempCBot = currencyBot;
		setCurrencyTop(tempCBot);
		setCurrencyBot(tempCTop);
	};
	return (
		<>
			<div>
				<button onClick={handleSwitch}>Swicth</button>
			</div>
		</>
	);
};

export default Switch;
