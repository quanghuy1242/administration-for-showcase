import React from 'react';
import { Stack, Text, css } from 'office-ui-fabric-react';
import { getStyle } from './ProjectItem.style';

export class ProjectItem extends React.Component {
  render() {
    const { project, className } = this.props;
    const classNames = getStyle();
    return (
      <Stack className={css(className, classNames.projectItem)} verticalAlign="center">
        <Text variant="large" className={classNames.projectItem_Header} nowrap>{project.name}</Text>
        <Text variant="mediumPlus">{project.date.toLocaleDateString()}</Text>
      </Stack>
    );
  }
}