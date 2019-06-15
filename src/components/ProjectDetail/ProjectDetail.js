import React from 'react';
import { Stack, Pivot, PivotItem, PivotLinkFormat } from 'office-ui-fabric-react';
import { getStyle } from './ProjectDetail.style';
import { ProjectBasicInfo } from '../ProjectBasicInfo/ProjectBasicInfo';

export class ProjectDetail extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.projectDetailWrapper}>
        <Pivot linkFormat={PivotLinkFormat.links} className={classNames.tabPivot}>
          <PivotItem headerText="General">
            <ProjectBasicInfo />
          </PivotItem>
          <PivotItem headerText="Description">

          </PivotItem>
          <PivotItem headerText="Features">

          </PivotItem>
          <PivotItem headerText="Changelog">

          </PivotItem>
        </Pivot>
      </Stack>
    );
  }
}