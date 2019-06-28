import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { Login } from '../../pages/Login/Login';
import { LandscapeHome } from '../../pages/LandscapeHome/LandscapeHome';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

export class RouteContainer extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={LandscapeHome} />
        <PrivateRoute exact path="/projects" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}