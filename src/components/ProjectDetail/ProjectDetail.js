import React from 'react';
import { Stack, Pivot, PivotItem, PivotLinkFormat, Spinner, SpinnerSize, PrimaryButton, Text } from 'office-ui-fabric-react';
import { getStyle } from './ProjectDetail.style';
import { ProjectBasicInfo } from '../ProjectBasicInfo/ProjectBasicInfo';
import { ProjectScreenshots } from '../ProjectScreenshots/ProjectScreenshots';
import { AppContext } from '../../context/AppContext';
import { ProjectInfomation } from '../ProjectInfomation/ProjectInfomation';
import { ProjectDescription } from '../ProjectDescription/ProjectDescription';

export class ProjectDetail extends React.Component {
  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.projectDetailWrapper}>
        {!this.context.isProjectDetailLoaded
          ? <Spinner size={SpinnerSize.large} style={{ height: 'calc(100vh - 50px)' }} />
          : !this.context.selectedProjectId
            ? (
              <Stack 
                horizontalAlign="center" 
                verticalAlign="center" 
                style={{ height: '100%' }} 
                tokens={{ childrenGap: 10 }}
              >
                <Text>
                  Chưa có project nào, hãy thêm vào một project
                </Text>
                <PrimaryButton
                  text="New Project"
                />
              </Stack>
            )
            : (
                <div className={classNames.projectDetailInner}>
                  <PrimaryButton
                    text="Save"
                    className={classNames.buttonSave}
                  />
                  <Pivot linkFormat={PivotLinkFormat.links} className={classNames.tabPivot}>
                    <PivotItem headerText="Overview">
                      <ProjectBasicInfo />
                      <ProjectScreenshots />
                    </PivotItem>
                    <PivotItem headerText="General">
                      <ProjectInfomation />
                    </PivotItem>
                    <PivotItem headerText="Description">
                      <Stack>
                        <ProjectDescription />
                      </Stack>
                    </PivotItem>
                    <PivotItem headerText="Features">
                      <Stack>
                        <ProjectDescription />
                      </Stack>
                    </PivotItem>
                    <PivotItem headerText="Changelog">
                      <Stack>
                        <ProjectDescription />
                      </Stack>
                    </PivotItem>
                  </Pivot>
                </div>
              )}
      </Stack>
    );
  }
}

ProjectDetail.contextType = AppContext;