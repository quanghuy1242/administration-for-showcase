import React from 'react';
import { getStyle } from './FilterPanel.style';
import { Stack, SearchBox, PrimaryButton, Panel, PanelType, TextField, DefaultButton, ComboBox } from 'office-ui-fabric-react';

const INITIAL_OPTIONS = [
  { key: 'projectOpt', text: 'Project' },
  { key: 'technolOpt', text: 'Technology' }
]

export class FilterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelOpen: false,
      newTech: {
        id: '',
        name: '',
        date: null
      },
      comboboxOptions: [],
      initialComboboxText: 'Project'
    };
  }

  handleShowPanel = () => {
    this.setState({ isPanelOpen: true });
  }

  handleClosePanel = () => {
    this.setState({ isPanelOpen: false })
  }

  handleSaveNewTech = (newTech) => {
    newTech.date = new Date();
    this.props.onAddNewTech(newTech);
    this.handleClosePanel();
  }

  handleIdChanged = (event) => {
    this.setState(state => {
      state.newTech.id = event.target.value;
      return state;
    })
  }

  handleNameChanged = (event) => {
    this.setState(state => {
      state.newTech.name = event.target.value;
      return state;
    })
  }

  handleComboBoxChange = (event, option) => {
    this.setState({
      comboboxSelectedOption: option.key,
      initialComboboxText: option.text
    })
  }

  handleGetOptions = () => {
    if (this.state.comboboxOptions.length > 0) {
      return this.state.comboboxOptions;
    }

    this.setState({
      options: INITIAL_OPTIONS,
      comboboxSelectedOption: 'projectOpt',
    });

    return INITIAL_OPTIONS;
  }

  handleRenderFooterContent = () => {
    return (
      <div>
        <PrimaryButton
          style={{ marginRight: 8 }}
          onClick={() => this.handleSaveNewTech(this.state.newTech)}
        >
          Save
        </PrimaryButton>
        <DefaultButton onClick={this.handleClosePanel}>
          Close
        </DefaultButton>
      </div>
    );
  };

  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal className={classNames.filterSession}>
        <ComboBox
          options={this.state.comboboxOptions}
          selectedKey={this.state.comboboxSelectedOption}
          onResolveOptions={this.handleGetOptions}
          onChange={this.handleComboBoxChange}
          text={this.state.initialComboboxText}
          className={classNames.comboxFilter}
        />
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
                  iconProps: { iconName: 'Stack' },
                  onClick: this.handleShowPanel
                }
              ]
            }}
          >
            New
          </PrimaryButton>
        </Stack.Item>
        <Panel
          isOpen={this.state.isPanelOpen}
          type={PanelType.medium}
          headerText="Add new technology"
          closeButtonAriaLabel="Close"
          onRenderFooterContent={this.handleRenderFooterContent}
        >
          <TextField
            label="Id"
            value={this.state.newTech.id}
            onChange={this.handleIdChanged}
          />
          <TextField
            label="Name of technologoy"
            value={this.state.newTech.name}
            onChange={this.handleNameChanged}
          />
        </Panel>
      </Stack>
    );
  }
}