import React, { Component } from 'react';
import { Panel, PanelType, PrimaryButton, DefaultButton } from 'office-ui-fabric-react';

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
    return (
      <Panel
        isOpen={this.props.isOpen}
        type={PanelType.medium}
        headerText="Project Detail"
        closeButtonAriaLabel="Close"
        onRenderFooterContent={this.handleRenderFooterContent}
        isFooterAtBottom={true}
      >
        Project Detail
      </Panel>
    );
  }
}