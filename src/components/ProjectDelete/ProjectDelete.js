import React from 'react';
import { Panel, PanelType, PrimaryButton, DefaultButton, TextField, Stack } from 'office-ui-fabric-react';
import { AppContext } from '../../context/AppContext';

export class ProjectDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      error: '',
      isDone: false
    };
  }

  handleIdChange = event => {
    this.setState({ id: event.target.value });
  }

  handleCheckId = () => {
    if (this.state.id === this.context.selectedProjectId) {
      this.setState({
        isDone: true,
        error: ''
      });
    } else {
      this.setState({
        isDone: false,
        error: 'The id does not match'
      });
    }
  }

  handleDelete = async () => {
    if (this.state.isDone) {
      if (await this.context.handleDeleteProject(this.state.id)) {
        this.props.onClosing();
      }
    }
  }
  
  handleRenderFooterContent = () => {
    return (
      <div>
        <PrimaryButton
          style={{ marginRight: 8 }}
          onClick={this.handleDelete}
          disabled={!this.state.isDone}
        >
          Delete
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
        isFooterAtBottom={true}
      >
        <Stack tokens={{ childrenGap: 8 }} horizontalAlign='start'>
          <TextField
            label='Project Id'
            value={this.state.id}
            onChange={this.handleIdChange}
            errorMessage={this.state.error}
          />
          <DefaultButton
            text='Verify'
            onClick={this.handleCheckId}
          />
        </Stack>
      </Panel>
    );
  }
}

ProjectDelete.contextType = AppContext;