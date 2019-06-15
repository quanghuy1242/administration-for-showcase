import React from 'react';
import { Stack, IconButton, css, Text, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { getStyle } from './ProjectBasicInfo.style';

export class ProjectBasicInfo extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal className={classNames.basicInfoWrapper} tokens={{ childrenGap: 10 }}>
        <Stack.Item>
          <div className={classNames.imagePreview}>
            <IconButton
              iconProps={{ iconName: "Edit" }}
              className={css('iconButton')}
            />
          </div>
        </Stack.Item>
        <Stack.Item grow disableShrink>
          <Stack verticalAlign="center" style={{ height: '100%' }}>
            <Text variant="xLarge">Basic Infomation</Text>
            <Text variant="Large">26/7/2018</Text>
            <TextField
              label="Name of Project"
            />
            <TextField
              label="Direct Link"
            />
          </Stack>
        </Stack.Item>
        <Stack.Item styles={{ root: { marginTop: '1rem' } }}>
          <PrimaryButton>Open Project</PrimaryButton>
        </Stack.Item>
      </Stack>
    );
  }
}