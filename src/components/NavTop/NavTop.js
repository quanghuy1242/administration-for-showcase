import React from 'react';
import { Stack, Text, IconButton } from 'office-ui-fabric-react';
import { getStyle } from './NavTop.style';
import { NavLink } from '../NavLink/NavLink';

export class NavTop extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal verticalAlign="center" className={classNames.NavTopWrapper}>
        <IconButton
          iconProps={{iconName: "GlobalNavButton"}}
          onClick={this.props.onToggleSideBar}
          className={classNames.iconButton}
        />
        <NavLink href="/">
          <Text variant="xLarge" className={classNames.NavTopText}>Administration for Project Showcase</Text>
        </NavLink>
        <Stack
          className={classNames.NavTopInfo}
          horizontalAlign="center"
          verticalAlign="center"
        >
          <Text variant="xLarge" className={classNames.NavTopText}>Demo</Text>
        </Stack>
      </Stack>
    );
  }
}