import React from "react";
import { Route, Routes } from "react-router-dom";
import Page from "./Pages/Page";
import SelectedCars from "./Pages/SelectedCars";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Page />}></Route>
			<Route path="/SelectedCars" element={<SelectedCars />}></Route>
		</Routes>
	);
}

export default App;
