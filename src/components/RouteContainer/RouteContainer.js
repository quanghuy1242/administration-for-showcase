import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import About from '../../pages/About/About';

const Login = lazy(() => import('../../pages/Login/Login'));
const Dashboard = lazy(() => import('../../pages/Dashboard/Dashboard'));
const LandscapeHome = lazy(() => import('../../pages/LandscapeHome/LandscapeHome'));

export class RouteContainer extends React.Component {
  render() {
    return (
      <Suspense
        fallback={
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
        }
      >
        <Switch>
          <PrivateRoute exact path="/" component={LandscapeHome} />
          <PrivateRoute exact path="/projects" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Suspense>
    );
  }
}