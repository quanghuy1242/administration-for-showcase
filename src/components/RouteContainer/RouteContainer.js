import React from 'react';
import { Switch, Route } from 'react-router-dom';

export class RouteContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => (<div>Home</div>)} />
      </Switch>
    );
  }
}