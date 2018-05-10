import React from "react";
import { Route, Redirect } from "react-router";
import Cookies from "js-cookie";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Cookies.get().username ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )}
    />
  )

export default PrivateRoute;
