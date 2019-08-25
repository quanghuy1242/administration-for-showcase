import React from 'react';
import { getStyle } from './FilterPanel.style';
import { Stack, SearchBox, PrimaryButton } from 'office-ui-fabric-react';
import { TechDetail } from '../TechDetail/TechDetail';

export class FilterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelOpen: false
    };
  }

  handleShowPanel = () => {
    this.setState({ isPanelOpen: true });
  }

  handleClosePanel = () => {
    this.setState({ isPanelOpen: false })
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal className={classNames.filterSession}>
        <Stack.Item grow disableShrink>
          <SearchBox
            placeholder="Filter..."
            style={{ width: 80 }}
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
                  iconProps: { iconName: 'Stack' },
                  onClick: this.handleShowPanel
                }
              ]
            }}
          >
            New
          </PrimaryButton>
        </Stack.Item>
        <TechDetail
          isOpen={this.state.isPanelOpen}
          onClosing={this.handleClosePanel}
          isAdd={true}
          onAddEditTech={this.props.onAddEditTech}
        />
      </Stack>
    );
  }
}