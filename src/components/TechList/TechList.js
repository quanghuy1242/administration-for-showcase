import React from 'react';
import { TechItem } from '../TechItem/TechItem';
import { getStyle } from './TechList.style';
import { Stack, SearchBox, IconButton, Panel, PanelType, PrimaryButton, DefaultButton } from 'office-ui-fabric-react';

export class TechList extends React.Component {
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

  handleRenderFooterContent = () => {
    return (
      <div>
        <PrimaryButton style={{ marginRight: 8 }}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={this.handleClosePanel}>
          Close
        </DefaultButton>
      </div>
    );
  };

  render() {
    const { techs, selected } = this.props;
    const classNames = getStyle();
    return (
      <Stack>
        <Stack horizontal className={classNames.filterSession}>
          <Stack.Item grow disableShrink>
            <SearchBox
              placeholder="Filter..."
            />
          </Stack.Item>
          <Stack.Item>
            <IconButton
              iconProps={{ iconName: 'Add' }}
              onClick={this.handleShowPanel}
            />
          </Stack.Item>
          <Stack.Item>
            <IconButton
              iconProps={{ iconName: 'MoreVertical' }}
            />
          </Stack.Item>
        </Stack>
        <Panel
          isOpen={this.state.isPanelOpen}
          type={PanelType.medium}
          headerText="Add new technology"
          closeButtonAriaLabel="Close"
          onRenderFooterContent={this.handleRenderFooterContent}
        >
          Content goes here
        </Panel>
        <div className={classNames.projectsListWrapper}>
          {techs.map(project => (
            <div
              onClick={() => this.props.onSelectedTechChanged(project.id)}
              key={project.id}
            >
              <TechItem
                tech={project}
                selected={selected}
                className={parseInt(selected) === parseInt(project.id) ? classNames.actived : ''}
              />
            </div>
          ))}
        </div>
      </Stack>
    );
  }
}