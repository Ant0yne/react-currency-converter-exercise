import { useState } from "react";

import Header from "./components/Header";
import Converter from "./components/Converter";
import Footer from "./components/Footer";

import rates from "./rates";

import "./App.css";

function App() {
	const [currencyTop, setCurrencyTop] = useState("EUR");
	const [currencyBot, setCurrencyBot] = useState("USD");

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
			/>
			<Footer />
		</>
	);
}

export default App;
