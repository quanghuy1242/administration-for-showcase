import React from 'react';
import { MonacoEditor } from '../MonacoEditor/MonacoEditor';
import { Stack } from 'office-ui-fabric-react';
import { AppContext } from '../../context/AppContext';
import { getStyle } from './ProjectDescription.style';

export class ProjectDescription extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.wrapper}>
        <MonacoEditor
          value={this.context.selectedProjectDetail.description}
          height="calc(100vh - 98px - 64px)"
          onEditorChange={this.context.handleLocalModified}
        />
      </Stack>
    );
  }
}

ProjectDescription.contextType = AppContext;