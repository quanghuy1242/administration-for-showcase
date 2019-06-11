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
          style={{marginRight: '0.5rem'}}
        />
        <NavLink href="/">
          <Text variant="xLarge" style={{fontWeight: 400}}>Administration for Project Showcase</Text>
        </NavLink>
      </Stack>
    );
  }
}