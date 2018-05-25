import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';
import App from './App';
import Login from './modules/page.login';

class RouterMap extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()} basename='/'>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/' component={App} />
        </Switch>
      </Router>
    );
  }
}

export default RouterMap;
