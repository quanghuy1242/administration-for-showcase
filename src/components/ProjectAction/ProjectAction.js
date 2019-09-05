import React from 'react';
import { DefaultButton, Stack } from 'office-ui-fabric-react';
import { getStyle } from './ProjectAction.style';

export class ProjectAction extends React.Component {
  render() {
    const classes = getStyle();
    return (
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
        />
      </Stack>
    );
  }
}