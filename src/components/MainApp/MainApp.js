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

  componentDidMount() {
    this.toggleOverlayNav();
    window.addEventListener('resize', this.toggleOverlayNav.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.toggleOverlayNav.bind(this), false);
  }

  toggleOverlayNav() {
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    this.setState({
      isCollapsed: isMobile,
      isOverlay: isMobile
    });
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
            <NavTop />
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