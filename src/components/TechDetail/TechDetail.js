import React from 'react';
import { Panel, PanelType, TextField, PrimaryButton, DefaultButton, Image } from 'office-ui-fabric-react';
import { getStyle } from './TechDetail.style';

export class TechDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: {
        nameId: '',
        name: '',
        description: '',
        imageUrl: ''
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

  handleDesChanged = event => {
    this.setState(state => {
      state.tech.description = event.target.value;
      return state;
    })
  }

  handleImageUrlChanged = event => {
    this.setState(state => {
      state.tech.imageUrl = event.target.value;
      return state;
    })
  }
  
  handleSaveTech = (tech) => {
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
    const classNames = getStyle();
    return (
      <Panel
        isOpen={this.props.isOpen}
        type={PanelType.medium}
        headerText="Technology Detail"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={this.handleRenderFooterContent}
      >
        <Image
          src={this.state.tech.imageUrl}
          alt="Image Preview"
          width="100%"
          className={classNames.imagePreview}
        />
        <TextField
          label="Identify Name"
          value={this.state.tech.id}
          onChange={this.handleIdChanged}
        />
        <TextField
          label="Name of technologoy"
          value={this.state.tech.name}
          onChange={this.handleNameChanged}
        />
        <TextField
          label="Description"
          multiline={true}
          value={this.state.tech.description}
          onChange={this.handleDesChanged}
        />
        <TextField
          label="Image URL"
          value={this.state.tech.imageUrl}
          onChange={this.handleImageUrlChanged}
        />
      </Panel>
    );
  }
}