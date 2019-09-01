import React, { Component } from 'react';
import { Panel, PanelType, PrimaryButton, DefaultButton, TextField, Image, Text, Stack } from 'office-ui-fabric-react';
import { getStyle } from './ProjectDetailEditor.style';
import { AppContext } from '../../context/AppContext';

export class ProjectDetailEditor extends Component {
  handleRenderFooterContent = () => {
    return (
      <div>
        <PrimaryButton
          style={{ marginRight: 8 }}
          onClick={this.handleSaveTech}
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
        <Stack horizontal tokens={{ childrenGap: 10 }} className={classes.projectInformationHeader}>
          <Image
            width={150}
            height={150}
            src={'https://picsum.photos/200'}
            alt='Image preview'
          />
          <Stack.Item grow disableShrink>
            <Stack verticalAlign='center' style={{ height: '100%' }}>
              <Text variant='xxLarge' block>Awesome Project</Text>
              <Text variant='medium' block>{(new Date()).toLocaleDateString()}</Text>
              <Text variant='large' block>{this.context.techs.find(tech => tech.nameId === this.context.selectedTechId).name}</Text>
            </Stack>
          </Stack.Item>
        </Stack>
        <Text variant='xLarge'>Basic Information</Text>
        <TextField
          label='Image Preview'
        />
        <TextField
          label='Name'
        />
        <TextField
          label='Website'
        />
        <TextField
          label='Brief Description'
          multiline
          resizable={false}
          maxLength={50}
        />
      </Panel>
    );
  }
}

ProjectDetailEditor.contextType = AppContext;