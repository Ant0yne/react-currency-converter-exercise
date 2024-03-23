import { useState } from "react";

import Header from "./components/Header";
import Converter from "./components/Converter";
import Footer from "./components/Footer";

import rates from "./rates";

import "./App.css";

function App() {
	const [currencyTop, setCurrencyTop] = useState({ name: "EUR", value: 1 });
	const [currencyBot, setCurrencyBot] = useState({
		name: "USD",
		value: 1.139283,
	});
	const [valueTop, setValueTop] = useState(0);
	const [valueBot, setValueBot] = useState(0);

	// Create an object with all currencies rate
	const currenciesRates = rates();

	return (
		<>
			<Header />
			<Converter
				currenciesRates={currenciesRates}
				currencyTop={currencyTop}
				setCurrencyTop={setCurrencyTop}
				currencyBot={currencyBot}
				setCurrencyBot={setCurrencyBot}
				valueTop={valueTop}
				setValueTop={setValueTop}
				valueBot={valueBot}
				setValueBot={setValueBot}
			/>
			<Footer />
		</>
	);
}

export default App;
