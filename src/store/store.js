import { combineReducers } from "redux";
import { configureStore } from "redux";

const combinedReducers = combineReducers({
	todo: todoReducer,
	event: eventReducer,
});

const store = configureStore(combinedReducers);

export default store;
