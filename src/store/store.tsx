import { createStore, applyMiddleware, AnyAction } from "redux";
import reducers, { CustomCombinedState } from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

import promise from "redux-promise";
import { routerMiddleware } from "connected-react-router";
import history from "./history";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(
	persistedReducer,
	applyMiddleware(thunk, routerMiddleware(history), promise, logger)
);
let persistor = persistStore(store);
export default store;
export { persistor };

export type StoreDispatch = Dispatch & ThunkDispatch<CustomCombinedState, any, AnyAction>;
export type StoreGetState = () => CustomCombinedState;
