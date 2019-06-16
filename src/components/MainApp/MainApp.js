import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Stack } from 'office-ui-fabric-react';
import { NavTop } from '../NavTop/NavTop';
import NavSide from '../NavSide/NavSide';
import { getStyle } from './MainApp.style';
import { AppContextProvider } from '../../context/AppContextProvider';

export class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      isOverlay: false,
      currentNavTopText: ''
    };
  }

  toggleSideBar() {
    this.setState({ isCollapsed: !this.state.isCollapsed })
  }

  onNavTopTextChanged = (value) => {
    this.setState({ currentNavTopText: value })
  }

  render() {
    const classNames = getStyle();
    return (
      <AppContextProvider>
        <div className={classNames.MainAppWrapper}>
          <Router>
            <Stack>
              <NavTop
                onToggleSideBar={() => this.toggleSideBar()}
                currentTopText={this.state.currentNavTopText}
                onNavTopTextChanged={this.onNavTopTextChanged}
              />
              <Stack horizontal>
                <NavSide
                  isCollapsed={this.state.isCollapsed} 
                  isOverlay={this.state.isOverlay} 
                  onDismiss={() => this.toggleSideBar()}
                  onNavTopTextChanged={this.onNavTopTextChanged}
                />
                  <>{this.props.children}</>
                </Stack>
            </Stack>
          </Router>
        </div>
      </AppContextProvider>
    );
  }
}