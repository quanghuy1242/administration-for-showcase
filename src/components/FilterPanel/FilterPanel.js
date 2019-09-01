import React from 'react';
import { getStyle } from './FilterPanel.style';
import { Stack, SearchBox, PrimaryButton } from 'office-ui-fabric-react';
import { TechDetail } from '../TechDetail/TechDetail';
import { ProjectDetailEditor } from '../ProjectDetailEditor/ProjectDetailEditor';

export class FilterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelTechOpen: false,
      isPanelProjectOpen: false
    };
  }

  handleShowPanelTech = () => {
    this.setState({ isPanelTechOpen: true });
  }

  handleClosePanelTech = () => {
    this.setState({ isPanelTechOpen: false })
  }

  handleShowPanelProject = () => {
    this.setState({ isPanelProjectOpen: true });
  }

  handleClosePanelProject = () => {
    this.setState({ isPanelProjectOpen: false })
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
                  iconProps: { iconName: 'OEM' },
                  onClick: this.handleShowPanelProject
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
        />
        <ProjectDetailEditor
          isOpen={this.state.isPanelProjectOpen}
          onClosing={this.handleClosePanelProject}
        />
      </Stack>
    );
  }
}