import Button from "../Button";

import "./buttons.css";

const Buttons = ({
	currencyTop,
	setCurrencyTop,
	currencyBot,
	setCurrencyBot,
}) => {
	return (
		<>
			<div>
				<Button
					currencyTop={currencyTop}
					setCurrencyTop={setCurrencyTop}
					currencyBot={currencyBot}
					setCurrencyBot={setCurrencyBot}
				/>
			</div>
		</>
	);
};

export default Buttons;
