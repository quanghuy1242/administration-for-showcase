import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const context = useContext(AppContext);
  return (
    !context.isUserLoginLoaded
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
          <Spinner size={SpinnerSize.large} />
        </div>
      )
      : (
        <Route
          {...rest}
          render={props => 
            context.userLoginInformation !== null ? (
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