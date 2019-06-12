import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { getStyle } from './Dashboard.style';
import { ProjectList } from '../../components/ProjectList/ProjectList';
import { ProjectDetail } from '../../components/ProjectDetail/ProjectDetail';
import { TechList } from '../../components/TechList/TechList';
import { FilterPanel } from '../../components/FilterPanel/FilterPanel';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: '1', name: 'Angular Blog', date: new Date() },
        { id: '2', name: 'Administration for something', date: new Date() },
        { id: '3', name: 'Student Management', date: new Date() },
        { id: '4', name: 'ATM Emulator', date: new Date() },
      ],
      techs: [
        { id: '1', name: 'Angular', date: new Date() },
        { id: '2', name: 'React', date: new Date() }
      ],
      selectedProjectId: 1,
      selectedTechId: 1
    };
  }

  onSelectedProjectChanged = (id) => {
    this.setState({ selectedProjectId: id });
  }

  onSelectedTechChanged = (id) => {
    this.setState({ selectedTechId: id });
  }

  onAddNewTech = (newTech) => {
    this.setState({
      techs: [
        ...this.state.techs,
        newTech
      ],
      selectedTechId: newTech.id
    })
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal className={classNames.dashboardWrapper}>
        <Stack.Item>
          <Stack>
            <Stack.Item>
              <FilterPanel
                onAddNewTech={this.onAddNewTech}
              />
            </Stack.Item>
            <Stack.Item>
              <Stack horizontal>
                <Stack.Item className={classNames.technologiesPanel}>
                  <TechList
                    techs={this.state.techs}
                    selected={this.state.selectedTechId}
                    onSelectedTechChanged={this.onSelectedTechChanged}
                  />
                </Stack.Item>
                <Stack.Item className={classNames.projectsPanel}>
                  <ProjectList
                    projects={this.state.projects}
                    selected={this.state.selectedProjectId}
                    onSelectedProjectChanged={this.onSelectedProjectChanged}
                  />
                </Stack.Item>
              </Stack>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item grow disableShrink className={classNames.projectDetailPanel}>
          <ProjectDetail />
        </Stack.Item>
      </Stack>
    );
  }
}