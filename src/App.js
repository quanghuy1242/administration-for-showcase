import React from 'react';
import { RouteContainer } from './components/RouteContainer/RouteContainer';
import { MainApp } from './components/MainApp/MainApp';

class App extends React.Component {
  render() {
    return (
      <MainApp>
        <RouteContainer />
      </MainApp>
    );
  }
}

export default App;
