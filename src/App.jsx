import { useState } from "react";

import Header from "./components/Header";
import Converter from "./components/Converter";
import Footer from "./components/Footer";

import rates from "./rates";

import "./App.css";

function App() {
	// OBJECT -> name:STRING, value:NUMBER -> currency for the top input
	const [currencyTop, setCurrencyTop] = useState({ name: "EUR", value: 1 });
	// OBJECT -> name:STRING, value:NUMBER -> currency for the bottom input
	const [currencyBot, setCurrencyBot] = useState({
		name: "USD",
		value: 1.139283,
	});
	//NUMBER -> value in the top input
	const [valueTop, setValueTop] = useState(0);
	//NUMBER -> value in the bottom input
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
