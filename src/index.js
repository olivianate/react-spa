import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import Root from './RouterMap';
import thunk from 'redux-thunk';//
import { Provider } from 'react-redux';
import reducerStore from './store';
import { createLogger } from 'redux-logger';
import config from './config';
import registerServiceWorker from './registerServiceWorker';

if (config.isMock) {
  require('./utils/mock');
}
window.BASE_URL = '/';
const logger = createLogger();//日志中间件

const enhancer = compose(applyMiddleware(thunk, logger));

const store = createStore(reducerStore, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
