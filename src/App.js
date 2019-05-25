import React from 'react';
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import RouteContainer from './components/RouteContainer/RouteContainer';

class App extends React.Component {
  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <RouteContainer />
      </Customizer>
    );
  }
}

export default App;
