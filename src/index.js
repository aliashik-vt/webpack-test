import React from "react";
import ReactDOM from "react-dom";

import Input from "bright-components/src/components/Input";
// import DateInput from "bright-components/src/components/DateInput";

const App = () => {
	return (
		<div>
			<h1>Hi there!</h1>
			<Input />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
