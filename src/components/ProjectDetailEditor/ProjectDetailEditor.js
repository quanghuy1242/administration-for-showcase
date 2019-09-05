import React, { Component } from 'react';
import { Panel, PanelType, PrimaryButton, DefaultButton, TextField, Image, Text, Stack } from 'office-ui-fabric-react';
import { getStyle } from './ProjectDetailEditor.style';
import { AppContext } from '../../context/AppContext';

export class ProjectDetailEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        name: '',
        briefDescription: '',
        url: '',
        image: '',
        date: new Date()
      },
      errors: {}
    };
  }

  handleRenderFooterContent = () => {
    return (
      <div>
        <PrimaryButton
          style={{ marginRight: 8 }}
          onClick={this.handleSaveProject}
        >
          Save
        </PrimaryButton>
        <DefaultButton onClick={this.props.onClosing}>
          Close
        </DefaultButton>
      </div>
    );
  };

  handleImageChange = event => {
    this.setState(state => {
      state.project.image = event.target.value;
      return state;
    });
  }

  handleNameChange = event => {
    this.setState(state => {
      state.project.name = event.target.value;
      return state;
    });
  }

  handleUrlChange = event => {
    this.setState(state => {
      state.project.url = event.target.value;
      return state;
    });
  }

  handlebriefDescriptionChange = event => {
    this.setState(state => {
      state.project.briefDescription = event.target.value;
      return state;
    });
  }

  validate = project => {
    let errors = {};
    if (!project.name.length) {
      errors.name = 'Tên project không để trống';
    }
    if (!project.briefDescription) {
      errors.briefDescription = 'Mô tả không để trống';
    }
    if (!/(http|https):\/\/.+/.test(project.image)) {
      errors.image = 'Link Image không đúng định dạng';
    }
    if (!/(http|https):\/\/.+/.test(project.url)) {
      errors.url = 'Website không đúng định dạng';
    }
    return errors;
  }

  handleSaveProject = async () => {
    const project = {
      ...this.state.project,
      description: this.state.project.briefDescription,
      technology: this.context.techs.find(tech => tech.nameId === this.context.selectedTechId)._id,
      screenshots: []
    };
    const errors = this.validate(project);
    if (Object.keys(errors).length) { this.setState({ errors }); return; }
    else {
      if (await this.context.handleAddNewProject(project)) {
        this.props.onClosing();
      }
    }
  }

  render() {
    const classes = getStyle();
    return (
      <Panel
        isOpen={this.props.isOpen}
        type={PanelType.medium}
        headerText="Project Detail"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={this.handleRenderFooterContent}
        isFooterAtBottom={true}
      >
        <Stack horizontal tokens={{ childrenGap: 20 }} className={classes.projectInformationHeader}>
          <Image
            width={150}
            height={150}
            src={this.state.project.image || 'https://picsum.photos/200'}
            alt='Image preview'
            className={classes.imagePreview}
          />
          <Stack.Item grow disableShrink>
            <Stack verticalAlign='center' style={{ height: '100%' }}>
              <Text variant='xxLarge' block>{this.state.project.name || 'Awesome Project'}</Text>
              <Text variant='medium' block>{(this.state.project.date).toLocaleDateString()}</Text>
              <Text variant='large' block>{this.context.techs.find(tech => tech.nameId === this.context.selectedTechId).name}</Text>
            </Stack>
          </Stack.Item>
        </Stack>
        <Text variant='xLarge'>Basic Information</Text>
        <TextField
          label='Image Preview'
          value={this.state.project.image}
          onChange={this.handleImageChange}
          errorMessage={this.state.errors.image}
        />
        <TextField
          label='Name'
          value={this.state.project.name}
          onChange={this.handleNameChange}
          errorMessage={this.state.errors.name}
        />
        <TextField
          label='Website'
          value={this.state.project.url}
          onChange={this.handleUrlChange}
          errorMessage={this.state.errors.url}
        />
        <TextField
          label='Brief Description'
          multiline
          resizable={false}
          maxLength={50}
          value={this.state.project.briefDescription}
          onChange={this.handlebriefDescriptionChange}
          errorMessage={this.state.errors.briefDescription}
        />
      </Panel>
    );
  }
}

ProjectDetailEditor.contextType = AppContext;