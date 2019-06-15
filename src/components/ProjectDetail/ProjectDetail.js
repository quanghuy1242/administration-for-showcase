import React from 'react';
import { Stack, Pivot, PivotItem, PivotLinkFormat } from 'office-ui-fabric-react';
import { getStyle } from './ProjectDetail.style';

export class ProjectDetail extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.projectDetailWrapper}>
        <Pivot linkFormat={PivotLinkFormat.links} className={classNames.tabPivot}>
          <PivotItem headerText="General">
            Chúng ta đang ở một thế giới tàn bạo như quỷ
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