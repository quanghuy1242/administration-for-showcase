import React from 'react';
import { getStyle } from './FilterPanel.style';
import { Stack, SearchBox, PrimaryButton } from 'office-ui-fabric-react';
import { TechDetail } from '../TechDetail/TechDetail';

export class FilterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelTechOpen: false
    };
  }

  handleShowPanelTech = () => {
    this.setState({ isPanelTechOpen: true });
  }

  handleClosePanelTech = () => {
    this.setState({ isPanelTechOpen: false })
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
                  onClick: this.handleShowPanelTech
                }
              ]
            }}
          >
            New
          </PrimaryButton>
        </Stack.Item>
        <TechDetail
          isOpen={this.state.isPanelTechOpen}
          onClosing={this.handleClosePanelTech}
          isAdd={true}
          onAddEditTech={this.props.onAddEditTech}
        />
      </Stack>
    );
  }
}