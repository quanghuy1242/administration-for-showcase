import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthApi } from '../../api/auth.api';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      AuthApi.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to='/login'
        />
      )}
  />
)