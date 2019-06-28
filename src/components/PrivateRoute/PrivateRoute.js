import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthApi } from '../../api/auth.api';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const isAuthenticated = await AuthApi.isAuthenticated();
      if (isAuthenticated) { setIsAuthenticated(true) }
      else setIsAuthenticated(false);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    isLoading
      ? (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'white',
          zIndex: 999999999999999,
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* TODO Splash View */}
          Loading...
        </div>
      )
      : (
        <Route
          {...rest}
          render={props => 
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to='/login'
              />
            )}
        />
      )
  )
}