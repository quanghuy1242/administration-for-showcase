import React from 'react';
import { Panel, PanelType, TextField, PrimaryButton, DefaultButton } from 'office-ui-fabric-react';

export class TechDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: {
        id: '',
        name: '',
        date: null
      },
    };
  }

  handleIdChanged = (event) => {
    this.setState(state => {
      state.tech.id = event.target.value;
      return state;
    })
  }

  handleNameChanged = (event) => {
    this.setState(state => {
      state.tech.name = event.target.value;
      return state;
    })
  }
  
  handleSaveTech = (tech) => {
    tech.date = new Date();
    this.props.onAddEditTech(tech);
    this.props.onClosing();
  }
  
  handleRenderFooterContent = () => {
    return (
      <div>
        <PrimaryButton
          style={{ marginRight: 8 }}
          onClick={() => this.handleSaveTech(this.state.tech)}
        >
          Save
        </PrimaryButton>
        <DefaultButton onClick={this.props.onClosing}>
          Close
        </DefaultButton>
      </div>
    );
  };

  render() {
    return (
      <Panel
        isOpen={this.props.isOpen}
        type={PanelType.medium}
        headerText="Technology Detail"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={this.handleRenderFooterContent}
      >
        <TextField
          label="Id"
          value={this.state.tech.id}
          onChange={this.handleIdChanged}
        />
        <TextField
          label="Name of technologoy"
          value={this.state.tech.name}
          onChange={this.handleNameChanged}
        />
      </Panel>
    );
  }
}