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
	const handleSwitch = () => {
		const tempCTop = currencyTop;
		const tempCBot = currencyBot;
		setCurrencyTop(tempCBot);
		setCurrencyBot(tempCTop);
		const tempVTop = valueTop;
		const tempVBot = valueBot;
		setValueTop(tempVBot);
		setValueBot(tempVTop);
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
