import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import { getStyle } from './About.style';

export default class About extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.aboutWrapper} horizontalAlign='center' verticalAlign='center'>
        <Text variant="superLarge" className={classNames.headerText}>
          Administration for Project Showcase
        </Text>
        <Text variant='large'>
          Được tạo bởi Nguyễn Quang Huy
        </Text>
        <Text variant='large'>2019</Text>
      </Stack>
    );
  }
}