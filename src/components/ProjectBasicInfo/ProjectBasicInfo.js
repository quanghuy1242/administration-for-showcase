import React from 'react';
import { Stack, IconButton, css, Text, CompoundButton } from 'office-ui-fabric-react';
import { getStyle } from './ProjectBasicInfo.style';

export class ProjectBasicInfo extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.basicInfoWrapper}>
        <IconButton
          iconProps={{ iconName: "Edit" }}
          className={css('iconButton')}
        />
        <Text variant="xLarge" className={classNames.headerText}>Basic Infomation</Text>
        <Stack horizontal tokens={{ childrenGap: 10 }}>
          <Stack.Item>
            <Stack tokens={{ childrenGap: 10 }}>
              <div className={classNames.imagePreview}></div>
            </Stack>
          </Stack.Item>
          <Stack.Item grow disableShrink>
            <Stack style={{ height: '100%', marginTop: '1rem' }} tokens={{ childrenGap: 5 }}>
              <Text variant="xxLarge">Project Name</Text>
              <Text>15/6/2019</Text>
              <Text variant="large">Technology Name</Text>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <CompoundButton
              primary={true}
              secondaryText="Go to project's website"
              style={{ marginRight: '1rem' }}
            >
              Open Project
            </CompoundButton>
          </Stack.Item>
        </Stack>
      </Stack>
    );
  }
}