import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { getStyle } from './LandscapeHome.style';

export class LandscapeHome extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack>
        Home
      </Stack>
    );
  }
}