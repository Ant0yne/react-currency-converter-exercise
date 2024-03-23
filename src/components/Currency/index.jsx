import "./currency.css";

const Currency = ({ position, currency, setCurrency, currenciesRates }) => {
	const ratesArr = [];
	for (const rate in currenciesRates) {
		if (position === "Top" && rate === "EUR") {
			ratesArr.push(
				<option key={rate} value="button{position}" selected="selected">
					{rate}
				</option>
			);
		} else if (position === "Bot" && rate === "USD") {
			ratesArr.push(
				<option key={rate} value="button{position}" selected="selected">
					{rate}
				</option>
			);
		} else {
			ratesArr.push(
				<option key={rate} value="button{position}">
					{rate}
				</option>
			);
		}
	}

	return (
		<>
			<select
				name={`button${position}`}
				id={`button${position}`}
				onChange={(e) => {
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
