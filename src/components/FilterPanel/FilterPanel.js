import React from 'react';
import { getStyle } from './FilterPanel.style';
import { Stack, SearchBox, IconButton } from 'office-ui-fabric-react';

export class FilterPanel extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal className={classNames.filterSession}>
          <Stack.Item grow disableShrink>
            <SearchBox
              placeholder="Filter..."
            />
          </Stack.Item>
          <Stack.Item>
            <IconButton
              iconProps={{ iconName: 'Add' }}
              className={classNames.iconButton}
            />
          </Stack.Item>
          <Stack.Item>
            <IconButton
              iconProps={{ iconName: 'MoreVertical' }}
              className={classNames.iconButton}
            />
          </Stack.Item>
        </Stack>
    );
  }
}