import Input from "../Input";
import Buttons from "../Buttons";

import "./converter.css";

const Converter = ({
	currenciesRates,
	currencyTop,
	setCurrencyTop,
	currencyBot,
	setCurrencyBot,
	valueTop,
	setValueTop,
	valueBot,
	setValueBot,
}) => {
	return (
		<>
			<main>
				<Input
					position="Top"
					currency={currencyTop}
					setCurrency={setCurrencyTop}
					valueTop={valueTop}
					setValueTop={setValueTop}
					valueBot={valueBot}
					setValueBot={setValueBot}
					currenciesRates={currenciesRates}
				/>
				<Buttons />
				<Input
					position="Bot"
					currency={currencyBot}
					setCurrency={setCurrencyBot}
					valueTop={valueTop}
					setValueTop={setValueTop}
					valueBot={valueBot}
					setValueBot={setValueBot}
					currenciesRates={currenciesRates}
				/>
			</main>
		</>
	);
};

export default Converter;
