import React from 'react';
import { Stack, Pivot, PivotItem, PivotLinkFormat } from 'office-ui-fabric-react';
import { getStyle } from './ProjectDetail.style';
import { ProjectBasicInfo } from '../ProjectBasicInfo/ProjectBasicInfo';
import { ProjectScreenshots } from '../ProjectScreenshots/ProjectScreenshots';
import { MonacoEditor } from '../MonacoEditor/MonacoEditor';

export class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Ví dụ"
    };
  };

  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.projectDetailWrapper}>
        <Pivot linkFormat={PivotLinkFormat.links} className={classNames.tabPivot}>
          <PivotItem headerText="General">
            <ProjectBasicInfo />
            <ProjectScreenshots />
          </PivotItem>
          <PivotItem headerText="Description">
            <Stack>
              <MonacoEditor value={this.state.value} />
            </Stack>
          </PivotItem>
          <PivotItem headerText="Features">
            <Stack>
              <MonacoEditor value={this.state.value} />
            </Stack>
          </PivotItem>
          <PivotItem headerText="Changelog">
            <Stack>
              <MonacoEditor value={this.state.value} />
            </Stack>
          </PivotItem>
        </Pivot>
      </Stack>
    );
  }
}