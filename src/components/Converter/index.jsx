import Input from "../Input";
import Buttons from "../Buttons";

import "./converter.css";

const Converter = ({
	currenciesRates,
	currencyTop,
	setCurrencyTop,
	currencyBot,
	setCurrencyBot,
}) => {
	return (
		<>
			<main>
				<Input />
				<Buttons currenciesRates={currenciesRates} />
				<Input />
			</main>
		</>
	);
};

export default Converter;
