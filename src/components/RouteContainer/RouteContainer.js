import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard/Dashboard';

export class RouteContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    );
  }
}