import React from 'react';
import { Route, Redirect } from 'react-router';
import Cookies from 'js-cookie';
import config from './config';

const loginpath = config.host ? `/${config.host}/login` : '/login';
    
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props => {
      return (
        Cookies.get().username ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: loginpath,
            }}
          />
        )
      ); 
    }
    }
  />
);

export default PrivateRoute;
