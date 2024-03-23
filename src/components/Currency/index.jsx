import "./currency.css";

const Currency = ({
	position,
	currencyTop,
	setCurrencyTop,
	currencyBot,
	setCurrencyBot,
	currenciesRates,
	setValueTop,
	setValueBot,
}) => {
	const ratesArr = [];

	for (const rate in currenciesRates) {
		ratesArr.push(
			<option key={rate} value={rate}>
				{rate}
			</option>
		);
	}

	const handleChangeSelect = (e) => {
		if (position === "Top") {
			setCurrencyTop({
				name: e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text,
				value:
					currenciesRates[
						e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
					],
			});
		} else {
			setCurrencyBot({
				name: e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text,
				value:
					currenciesRates[
						e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
					],
			});
		}
		setValueTop(0);
		setValueBot(0);
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
