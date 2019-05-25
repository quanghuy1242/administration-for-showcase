import React from 'react';
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { RouteContainer } from './components/RouteContainer/RouteContainer';
import { MainApp } from './components/MainApp/MainApp';

class App extends React.Component {
  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <MainApp>
          <RouteContainer />
        </MainApp>
      </Customizer>
    );
  }
}

export default App;
