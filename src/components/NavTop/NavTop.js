import React from 'react';
import { Stack, Text, IconButton, css } from 'office-ui-fabric-react';
import { getStyle } from './NavTop.style';
import { NavLink } from '../NavLink/NavLink';
import { AuthApi } from '../../api/auth.api';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

class NavTopClass extends React.Component {
  handleLogout = async () => {
    const check = await AuthApi.logout();
    if (check) {
      this.context.handleClearUserLoginInfo();
      this.props.history.push('/login');
    } else {
      alert('Có lỗi khi logout.');
    }
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal verticalAlign="center" className={classNames.NavTopWrapper}>
        <IconButton
          iconProps={{iconName: "GlobalNavButton"}}
          onClick={this.props.onToggleSideBar}
          className={css(classNames.iconButton, classNames.higherIndex)}
        />
        <NavLink href="/" className={classNames.higherIndex}>
          <Text variant="xLarge" className={classNames.NavTopText}>
            Administration for Project Showcase
          </Text>
        </NavLink>
        <Stack.Item grow disableShrink className={classNames.higherIndex}>
          <Stack
            horizontalAlign="end"
            verticalAlign="center"
            horizontal
          >
            <Text variant="Large" className={classNames.NavTopText} style={{ marginRight: '0.5rem' }}>
              Quang Huy
            </Text>
            <div className={css(classNames.higherIndex, classNames.btnLogout)} onClick={this.handleLogout}>
              <Text variant="Large" className={classNames.NavTopText}>
                Logout
              </Text>
            </div>
          </Stack>
        </Stack.Item>
        <Stack
          className={classNames.NavTopInfo}
          horizontalAlign="center"
          verticalAlign="center"
        >
          <Text variant="xLarge" className={classNames.NavTopText}>{this.props.currentTopText}</Text>
        </Stack>
      </Stack>
    );
  }
}
NavTopClass.contextType = AppContext;

export const NavTop = withRouter(NavTopClass);