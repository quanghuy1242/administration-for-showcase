import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { Login } from '../../pages/Login/Login';

export class RouteContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}