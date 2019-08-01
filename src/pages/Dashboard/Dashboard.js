import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { getStyle } from './Dashboard.style';
import { ProjectList } from '../../components/ProjectList/ProjectList';
import { ProjectDetail } from '../../components/ProjectDetail/ProjectDetail';
import { TechList } from '../../components/TechList/TechList';
import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { AppContext } from '../../context/AppContext';

export default class Dashboard extends React.Component {
  onAddEditTech = (newTech) => {
    for (let tech of this.state.techs) {
      if (tech.id !== newTech.id) {
        this.setState({
          techs: [
            ...this.state.techs,
            newTech
          ],
          selectedTechId: newTech.id
        });
      } else {
        // co roi thi update
      }
    }
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal className={classNames.dashboardWrapper}>
        <Stack.Item>
          <Stack className={classNames.leftPanel}>
            <Stack.Item className={classNames.filterWrapper}>
              <FilterPanel
                onAddEditTech={this.onAddEditTech}
              />
            </Stack.Item>
            <Stack.Item>
              <Stack horizontal>
                <Stack.Item className={classNames.technologiesPanel}>
                  <TechList
                    techs={this.context.techs}
                    selected={this.context.selectedTechId}
                    onSelectedTechChanged={this.context.onSelectedTechChanged}
                  />
                </Stack.Item>
                <Stack.Item className={classNames.projectsPanel}>
                  <ProjectList
                    projects={this.context.projects}
                    selected={this.context.selectedProjectId}
                    onSelectedProjectChanged={this.context.onSelectedProjectChanged}
                  />
                </Stack.Item>
              </Stack>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item grow disableShrink className={classNames.projectDetailPanel}>
          <ProjectDetail
            id={this.context.selectedProjectId}
          />
        </Stack.Item>
      </Stack>
    );
  }
}

Dashboard.contextType = AppContext;