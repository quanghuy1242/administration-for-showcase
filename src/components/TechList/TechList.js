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
          {techs.map(tech => (
            <div
              onClick={() => this.props.onSelectedTechChanged(tech.nameId)}
              key={tech.nameId}
            >
              <TechItem
                tech={tech}
                selected={selected}
                className={selected === tech.nameId ? classNames.actived : ''}
              />
            </div>
          ))}
        </div>
      </Stack>
    );
  }
}