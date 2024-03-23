import Currency from "../Currency";
import "./input.css";

const Input = ({
	position,
	currency,
	setCurrency,
	valueTop,
	setValueTop,
	valueBot,
	setValueBot,
	currenciesRates,
}) => {
	return (
		<>
			<input
				type="number"
				value={position === "Top" ? valueTop : valueBot}
				name={`input${position}`}
				onChange={(e) => {
					if (position === "Top") {
						setValueTop(e.target.value);
					} else {
						setValueBot(e.target.value);
					}
				}}
			/>
			<Currency
				position={position}
				currency={currency}
				setCurrency={setCurrency}
				currenciesRates={currenciesRates}
			/>
		</>
	);
};

export default Input;
