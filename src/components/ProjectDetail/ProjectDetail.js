import React from 'react';
import { Stack, TextField, Pivot, PivotItem, IconButton } from 'office-ui-fabric-react';
import { getStyle } from './ProjectDetail.style';

export class ProjectDetail extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.projectDetailWrapper} tokens={{ childrenGap: 5 }}>
        <Stack horizontal className={classNames.header} tokens={{ childrenGap: 5 }}>
          <Stack.Item grow disableShrink>
            <TextField
              value="Unknown Title"
            />
          </Stack.Item>
          <Stack.Item className={classNames.headerAction}>
            <IconButton iconProps={{ iconName: 'Edit' }} />
            <IconButton iconProps={{ iconName: 'Delete' }} />
            <IconButton iconProps={{ iconName: 'MoreVertical' }} />
          </Stack.Item>
        </Stack>
        <Pivot>
          <PivotItem headerText="Description"></PivotItem>
          <PivotItem headerText="Description"></PivotItem>
          <PivotItem headerText="Description"></PivotItem>
          <PivotItem headerText="Description"></PivotItem>
        </Pivot>
      </Stack>
    );
  }
}