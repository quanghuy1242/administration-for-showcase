import React from 'react';
import { RouteContainer } from './components/RouteContainer/RouteContainer';
import { MainApp } from './components/MainApp/MainApp';
import { Fabric } from 'office-ui-fabric-react';

class App extends React.Component {
  render() {
    return (
      <Fabric>
        <MainApp>
          <RouteContainer />
        </MainApp>
      </Fabric>
    );
  }
}

export default App;
