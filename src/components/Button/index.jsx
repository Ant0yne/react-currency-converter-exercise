import "./button.css";

const Button = ({ direction, currenciesRates }) => {
	const ratesArr = [];
	for (const rate in currenciesRates) {
		if (direction === "Top" && rate === "EUR") {
			ratesArr.push(
				<option value="button{direction}" selected="selected">
					{rate}
				</option>
			);
		} else if (direction === "Bot" && rate === "USD") {
			ratesArr.push(
				<option value="button{direction}" selected="selected">
					{rate}
				</option>
			);
		} else {
			ratesArr.push(<option value="button{direction}">{rate}</option>);
		}
	}

	return (
		<>
			<select
				name={`button${direction}`}
				id={`button${direction}`}
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

export default Button;
