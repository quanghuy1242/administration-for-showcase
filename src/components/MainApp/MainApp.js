import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Stack } from 'office-ui-fabric-react';
import { NavTop } from '../NavTop/NavTop';
import NavSide from '../NavSide/NavSide';
import { getStyle } from './MainApp.style';

export class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      isOverlay: false
    };
  }

  toggleSideBar() {
    this.setState({ isCollapsed: !this.state.isCollapsed })
  }

  render() {
    const classNames = getStyle();
    return (
      <div className={classNames.MainAppWrapper}>
        <Router>
          <Stack>
            <NavTop onToggleSideBar={() => this.toggleSideBar()} />
            <Stack horizontal>
              <NavSide
                isCollapsed={this.state.isCollapsed} 
                isOverlay={this.state.isOverlay} 
                onDismiss={() => this.toggleSideBar()}
              />
                <>{this.props.children}</>
              </Stack>
          </Stack>
        </Router>
      </div>
    );
  }
}