import React from "react";
import { Route, Routes } from "react-router-dom";
import Page from "./Pages/Page";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Page />}></Route>
		</Routes>
	);
}

export default App;
