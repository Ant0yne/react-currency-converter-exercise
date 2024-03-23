import "./switch.css";

const Switch = ({
	currencyTop,
	setCurrencyTop,
	currencyBot,
	setCurrencyBot,
	valueTop,
	setValueTop,
	valueBot,
	setValueBot,
}) => {
	/**
	 * switch currencies
	 * recalcule the value for the bottom input
	 */
	const handleSwitch = () => {
		const tempCTop = currencyTop;
		const tempCBot = currencyBot;
		setCurrencyTop(tempCBot);
		setCurrencyBot(tempCTop);
		const tempVTop = valueTop;
		const tempVBot = valueBot;
		setValueBot((tempVTop * currencyTop.value) / currencyBot.value);
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
