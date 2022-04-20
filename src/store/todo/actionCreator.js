import { ADD_CARS, TOGGLE_CARS, REMOVE_CARS } from "./actionType.js";

export const addCars = (todoDescription) => {
	return {
		type: ADD_CARS,
		payload: {
			description: todoDescription,
		},
	};
};

export const toggleCars = (todoId) => {
	return {
		type: TOGGLE_CARS,
		payload: {
			id: todoId,
		},
	};
};

export const removeCars = (todoId) => {
	return {
		type: REMOVE_CARS,
		payload: {
			id: todoId,
		},
	};
};
