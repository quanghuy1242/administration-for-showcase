import React from 'react';
import { Stack, Text, PrimaryButton } from 'office-ui-fabric-react';
import { getStyle } from './LandscapeHome.style';
import logo from './image.svg';
import { Link } from 'react-router-dom';

export default class LandscapeHome extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal className={classNames.homeWrapper}>
        <Stack.Item className={classNames.leftPanel}>
          <Stack horizontalAlign="center" verticalAlign='center' className={classNames.leftPanelInner}>
            <Text variant="superLarge" className={classNames.headerText}>Administration</Text>
            <Text variant="superLarge" className={classNames.headerText}>for Project Showcase</Text>
            <Link className={classNames.button} to='/projects'>
              <PrimaryButton>Workspace</PrimaryButton>
            </Link>
          </Stack>
        </Stack.Item>
        <Stack.Item grow disableShrink className={classNames.rightPanel}>
          <Stack verticalAlign="center" horizontalAlign="start" className={classNames.rightPanelInner} >
            <img src={logo} alt="hmm" style={{ width: 550 }} />
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }
}