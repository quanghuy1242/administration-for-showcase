import React from 'react';
import { TechItem } from '../TechItem/TechItem';
import { getStyle } from './TechList.style';
import { Stack } from 'office-ui-fabric-react';

export class TechList extends React.Component {
  render() {
    const { techs, selected } = this.props;
    const classNames = getStyle();
    return (
      <Stack>
        <div className={classNames.projectsListWrapper}>
          {techs.map(project => (
            <div
              onClick={() => this.props.onSelectedTechChanged(project.id)}
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