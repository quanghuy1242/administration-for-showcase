import React from 'react';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { getStyle } from './ProjectList.style';
import { Stack, SearchBox, IconButton } from 'office-ui-fabric-react';

export class ProjectList extends React.Component {
  render() {
    const { projects, selected } = this.props;
    const classNames = getStyle();
    return (
      <Stack>
        <Stack horizontal className={classNames.filterSession}>
          <Stack.Item grow disableShrink>
            <SearchBox
              placeholder="Filter..."
            />
          </Stack.Item>
          <Stack.Item>
            <IconButton
              iconProps={{ iconName: 'Add' }}
              className={classNames.iconButton}
            />
          </Stack.Item>
          <Stack.Item>
            <IconButton
              iconProps={{ iconName: 'MoreVertical' }}
              className={classNames.iconButton}
            />
          </Stack.Item>
        </Stack>
        <div className={classNames.projectsListWrapper}>
          {projects.map(project => (
            <div
              onClick={() => this.props.onSelectedProjectChanged(project.id)}
              key={project.id}
            >
              <ProjectItem
                project={project}
                selected={selected}
                className={parseInt(selected) === parseInt(project.id) ? classNames.actived : ''}
              />
            </div>
          ))}
        </div>
      </Stack>
    );
  }
}