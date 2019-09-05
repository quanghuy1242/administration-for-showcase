import React from 'react';
import { DefaultButton, Stack, Panel } from 'office-ui-fabric-react';
import { getStyle } from './ProjectAction.style';
import { ProjectDelete } from '../ProjectDelete/ProjectDelete';

export class ProjectAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleteOpen: false
    };
  }

  handleDeletionPanelOpen = () => {
    this.setState({ isDeleteOpen: true });
  }

  handleDeletionPanelClose = () => {
    this.setState({ isDeleteOpen: false });
  }

  render() {
    const classes = getStyle();
    return (
      <>
        <Stack 
          tokens={{ childrenGap: 8 }}
          className={classes.wrapper}
        >
          <DefaultButton
            text='Make current project private'
          />
          <DefaultButton
            text='Move current project to another techology'
          />
          <DefaultButton
            text='Copy current project to another techology'
          />
          <DefaultButton
            text='Coverting project information into JSON data'
          />
          <DefaultButton
            text='Delete current project (can not be undo)'
            onClick={this.handleDeletionPanelOpen}
          />
        </Stack>
        <ProjectDelete
          isOpen={this.state.isDeleteOpen}
          onClosing={this.handleDeletionPanelClose}
        />
      </>
    );
  }
}