import React from 'react';
import { getStyle } from './FilterPanel.style';
import { Stack, SearchBox, PrimaryButton, Dropdown } from 'office-ui-fabric-react';
import { TechDetail } from '../TechDetail/TechDetail';

export class FilterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelOpen: false,
      selectedFilterItem: undefined,
      dropdownItem: [
        { key: 'projectOpt', text: 'Project' },
        { key: 'technolOpt', text: 'Technology' }
      ]
    };
  }

  componentDidMount() {
    this.setState({
      selectedFilterItem: this.state.dropdownItem[0]
    });
  }

  handleShowPanel = () => {
    this.setState({ isPanelOpen: true });
  }

  handleClosePanel = () => {
    this.setState({ isPanelOpen: false })
  }

  handleFilterChange = (event, item) => {
    this.setState({
      selectedFilterItem: item
    })
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal className={classNames.filterSession}>
        <Dropdown
          selectedKey={this.state.selectedFilterItem ? this.state.selectedFilterItem.key : undefined}
          options={this.state.dropdownItem}
          onChange={this.handleFilterChange}
          className={classNames.comboxFilter}
        />
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
                  text: 'Project (Selected technology)',
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