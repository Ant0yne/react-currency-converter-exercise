import { useState } from "react";
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
	const [isFocus, setIsFocus] = useState(false);

	/**
	 *
	 * @param {Object} e
	 *
	 * check the position of the input
	 * calculate the new value for both input with the currency rate
	 */
	const handleChangeInput = (e) => {
		if (position === "Top") {
			setValueTop(e.target.value);
			setValueBot((e.target.value * currencyBot.value) / currencyTop.value);
		} else {
			setValueBot(e.target.value);
			setValueTop((e.target.value * currencyTop.value) / currencyBot.value);
		}
	};

	return (
		<>
			<div className="input">
				<input
					type="number"
					value={position === "Top" ? valueTop : valueBot}
					placeholder={isFocus ? "" : "0"}
					onFocus={() => {
						setIsFocus(true);
						if (
							(valueBot === 0 || valueBot === "") &&
							(valueBot === 0 || valueBot === "")
						) {
							setValueTop("");
							setValueBot("");
						}
					}}
					onBlur={() => {
						setIsFocus(false);
					}}
					name={`input${position}`}
					onChange={handleChangeInput}
				/>
				<Currency
					position={position}
					currencyTop={currencyTop}
					setCurrencyTop={setCurrencyTop}
					currencyBot={currencyBot}
					setCurrencyBot={setCurrencyBot}
					currenciesRates={currenciesRates}
					valueTop={valueTop}
					setValueTop={setValueTop}
					valueBot={valueBot}
					setValueBot={setValueBot}
				/>
			</div>
		</>
	);
};

export default Input;
