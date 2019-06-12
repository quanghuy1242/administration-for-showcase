import React from 'react';
import { TechItem } from '../TechItem/TechItem';
import { getStyle } from './TechList.style';
import { Stack, Panel, PanelType, PrimaryButton, DefaultButton, TextField } from 'office-ui-fabric-react';

export class TechList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelOpen: false,
      newTech: {
        id: '',
        name: '',
        date: null
      }
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
    const { techs, selected } = this.props;
    const classNames = getStyle();
    return (
      <Stack>
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