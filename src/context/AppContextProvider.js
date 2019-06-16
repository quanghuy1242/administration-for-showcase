import React from 'react';
import { AppContext } from './AppContext';

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const value = {
      ...this.state
    }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}