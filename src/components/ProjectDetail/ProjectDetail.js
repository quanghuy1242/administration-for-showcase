import React from 'react';
import { Stack, Pivot, PivotItem, PivotLinkFormat, Spinner, SpinnerSize, PrimaryButton, Text } from 'office-ui-fabric-react';
import { getStyle } from './ProjectDetail.style';
import { ProjectBasicInfo } from '../ProjectBasicInfo/ProjectBasicInfo';
import { ProjectScreenshots } from '../ProjectScreenshots/ProjectScreenshots';
import { AppContext } from '../../context/AppContext';
import { ProjectInfomation } from '../ProjectInfomation/ProjectInfomation';
import { ProjectDescription } from '../ProjectDescription/ProjectDescription';
import { ProjectAction } from '../ProjectAction/ProjectAction';

export class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: true
    };
  }

  handleToggleIsDone = isDone => {
    this.setState({ isDone: isDone });
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.projectDetailWrapper}>
        {this.state.isDone
          || (
            <Stack className={classNames.overlay}>
              <Spinner style={{ height: '100%' }} size={SpinnerSize.large} />
            </Stack>
          )}
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
              </Stack>
            )
            : (
                <div className={classNames.projectDetailInner}>
                  {this.context.isProjectModified
                    ? <PrimaryButton
                        text="Save"
                        className={classNames.buttonSave}
                        onClick={async () => {
                          this.handleToggleIsDone(false);
                          await this.context.handleSaveSelectedProject();
                          this.handleToggleIsDone(true);
                        }}
                      />
                    : <></>}
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
                    <PivotItem headerText="Action">
                      <ProjectAction />
                    </PivotItem>
                  </Pivot>
                </div>
              )}
      </Stack>
    );
  }
}

ProjectDetail.contextType = AppContext;