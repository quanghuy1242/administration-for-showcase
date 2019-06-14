import React from 'react';
import { Stack, Text, IconButton, css } from 'office-ui-fabric-react';
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
          className={css(classNames.iconButton, classNames.higherIndex)}
        />
        <NavLink href="/" className={classNames.higherIndex}>
          <Text variant="xLarge" className={classNames.NavTopText}>
            Administration for Project Showcase
          </Text>
        </NavLink>
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