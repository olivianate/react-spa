import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';
import App from './App';
import Login from './modules/page.login';
import config from './config';

class RouterMap extends React.Component {
  render() {
    const loginpath = config.host ? `/${config.host}/login` : '/login';
    const homepath = config.host ? `/${config.host}/` : '/';
    return (
      <Router history={createBrowserHistory()} basename='/'>
          <Switch>
            <Route path={loginpath} component={Login} />
            <PrivateRoute path={homepath} component={App} />
          </Switch>
      </Router>
    );
  }
}

export default RouterMap;
