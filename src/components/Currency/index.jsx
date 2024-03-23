import "./currency.css";

const Currency = ({
	position,
	currencyTop,
	setCurrencyTop,
	currencyBot,
	setCurrencyBot,
	currenciesRates,
}) => {
	const ratesArr = [];

	for (const rate in currenciesRates) {
		ratesArr.push(
			<option key={rate} value={rate}>
				{rate}
			</option>
		);
	}

	return (
		<>
			<select
				name={`button${position}`}
				id={`button${position}`}
				value={position === "Top" ? currencyTop.name : currencyBot.name}
				onChange={(e) => {
					if (position === "Top") {
						setCurrencyTop({
							name: e.nativeEvent.target[e.nativeEvent.target.selectedIndex]
								.text,
							value:
								currenciesRates[
									e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
								],
						});
					} else {
						setCurrencyBot({
							name: e.nativeEvent.target[e.nativeEvent.target.selectedIndex]
								.text,
							value:
								currenciesRates[
									e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
								],
						});
					}
					console.log(
						e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
					);
				}}>
				{ratesArr}
			</select>
		</>
	);
};

export default Currency;
