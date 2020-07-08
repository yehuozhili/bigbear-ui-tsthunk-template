import { Reducer, AnyAction, ReducersMapObject } from "redux";
import { connectRouter, RouterState, LocationChangeAction } from "connected-react-router";
import history from "../history";
import home, { HomeState } from "./home";
import { combineReducers } from "redux-immer";
import produce from "immer";
import { History } from "history";

export type CustomCombinedReducer = {
	router: Reducer<
		RouterState<History.PoorMansUnknown>,
		LocationChangeAction<History.PoorMansUnknown>
	>;
	home: Reducer<HomeState, AnyAction>;
};

export type CustomCombinedState = {
	router: RouterState;
	home: HomeState;
};
let reducers: ReducersMapObject<CustomCombinedState, any> = {
	router: connectRouter(history),
	home,
};

let reducer = combineReducers(produce, reducers);

export default reducer;