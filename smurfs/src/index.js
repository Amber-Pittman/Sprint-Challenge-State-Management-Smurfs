import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/smurfReducer";

const store = createStore(reducer, applyMiddleware(thunk, logger));
// if you use redux-logger with other middleware packages, make sure 
// logger is passed to applyMiddleware last.

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));