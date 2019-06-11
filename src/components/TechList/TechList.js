import React from 'react';
import { TechItem } from '../TechItem/TechItem';
import { getStyle } from './TechList.style';
import { Stack, SearchBox, IconButton } from 'office-ui-fabric-react';

export class TechList extends React.Component {
  render() {
    const { techs, selected } = this.props;
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
            />
          </Stack.Item>
          <Stack.Item>
            <IconButton
              iconProps={{ iconName: 'MoreVertical' }}
            />
          </Stack.Item>
        </Stack>
        <div className={classNames.projectsListWrapper}>
          {techs.map(project => (
            <div
              // onClick={() => this.props.onSelectedProjectChanged(project.id)}
              key={project.id}
            >
              <TechItem
                tech={project}
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