import React from 'react';
import { Stack, TextField, Pivot, PivotItem } from 'office-ui-fabric-react';
import { getStyle } from './ProjectDetail.style';

export class ProjectDetail extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.projectDetailWrapper} tokens={{ childrenGap: 10 }}>
        <Stack className={classNames.header} tokens={{ childrenGap: 5 }}>
          <TextField
            label="Name of project"
            value="Unknown Title"
          />
          <Pivot>
            <PivotItem headerText="Description"></PivotItem>
            <PivotItem headerText="Description"></PivotItem>
            <PivotItem headerText="Description"></PivotItem>
            <PivotItem headerText="Description"></PivotItem>
          </Pivot>
        </Stack>
      </Stack>
    );
  }
}