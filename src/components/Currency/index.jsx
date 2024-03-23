import "./currency.css";

const Currency = ({
	position,
	currencyTop,
	setCurrencyTop,
	currencyBot,
	setCurrencyBot,
	currenciesRates,
	valueTop,
	setValueTop,
	valueBot,
	setValueBot,
}) => {
	const ratesArr = [];

	// Create an array of option for the select element with all the currencies names
	for (const rate in currenciesRates) {
		ratesArr.push(
			<option key={rate} value={rate}>
				{rate}
			</option>
		);
	}

	/**
	 *
	 * @param {Object} e
	 *
	 * Check what currency is changed
	 * Recalcule the values for the currency that changed
	 */
	const handleChangeSelect = (e) => {
		if (position === "Top") {
			setCurrencyTop({
				name: e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text,
				value:
					currenciesRates[
						e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
					],
			});
			const tempValue = valueBot;
			setValueTop(
				(tempValue *
					currenciesRates[
						e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
					]) /
					currencyBot.value
			);
		} else {
			setCurrencyBot({
				name: e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text,
				value:
					currenciesRates[
						e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
					],
			});
			const tempValue = valueTop;
			setValueBot(
				(tempValue *
					currenciesRates[
						e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
					]) /
					currencyTop.value
			);
		}
	};

	return (
		<>
			<select
				name={`button${position}`}
				id={`button${position}`}
				value={position === "Top" ? currencyTop.name : currencyBot.name}
				onChange={handleChangeSelect}>
				{ratesArr}
			</select>
		</>
	);
};

export default Currency;
