import Button from "../Button";

import "./buttons.css";

const Buttons = ({ currenciesRates }) => {
	return (
		<>
			<Button direction="Top" currenciesRates={currenciesRates} />
			<Button direction="Bot" currenciesRates={currenciesRates} />
		</>
	);
};

export default Buttons;
