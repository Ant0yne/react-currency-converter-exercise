import Currency from "../Currency";
import "./input.css";

const Input = ({
	position,
	currencyTop,
	setCurrencyTop,
	currencyBot,
	setCurrencyBot,
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
						setValueBot(
							(e.target.value * currencyBot.value) / currencyTop.value
						);
					} else {
						setValueBot(e.target.value);
						setValueTop(
							(e.target.value * currencyTop.value) / currencyBot.value
						);
					}
				}}
			/>
			<Currency
				position={position}
				currencyTop={currencyTop}
				setCurrencyTop={setCurrencyTop}
				currencyBot={currencyBot}
				setCurrencyBot={setCurrencyBot}
				currenciesRates={currenciesRates}
			/>
		</>
	);
};

export default Input;
