import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class RouteContainer extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => (<div>Home</div>)} />
        </Switch>
      </Router>
    );
  }
}