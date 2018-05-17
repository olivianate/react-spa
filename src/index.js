import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore, compose } from "redux";
import Root from "./RouterMap";
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import reducerStore from "./store";
import config from './config';

import registerServiceWorker from "./registerServiceWorker";

if(config.isMock){
  require('./utils/mock');
}

const enhancer = compose(applyMiddleware(thunk.withExtraArgument()));

const store = createStore(reducerStore, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
