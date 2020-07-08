import React, { Suspense, lazy } from "react";
import "bigbear-ui/dist/index.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import history from "./store/history";
import store, { persistor } from "./store/store";
import "./styles/style.scss";
import { Switch, Route, Redirect } from "react-router";
import "./IconLibrary";
import Tabs from "./components/Tab";
import { PersistGate } from "redux-persist/integration/react";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ConnectedRouter history={history}>
					<main className="main-container">
						<Suspense fallback={null}>
							<Switch>
								<Route
									path="/"
									exact
									component={lazy(() =>
										import("./routes/Home")
									)}
								/>
								<Route
									path="/cart"
									exact
									component={lazy(() =>
										import("./routes/Home")
									)}
								/>
								<Redirect to="/" />
							</Switch>
						</Suspense>
						<Tabs></Tabs>
					</main>
				</ConnectedRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
