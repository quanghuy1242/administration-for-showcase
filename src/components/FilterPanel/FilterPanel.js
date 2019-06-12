import React from 'react';
import { getStyle } from './FilterPanel.style';
import { Stack, SearchBox, PrimaryButton } from 'office-ui-fabric-react';

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
            <PrimaryButton
              className={classNames.newButton}
              menuProps={{
                items: [
                  {
                    key: 'newProject',
                    text: 'Project',
                    iconProps: { iconName: 'OEM' }
                  },
                  {
                    key: 'newTech',
                    text: 'Technology',
                    iconProps: { iconName: 'Stack' }
                  }
                ]
              }}
            >
              New
            </PrimaryButton>
          </Stack.Item>
        </Stack>
    );
  }
}