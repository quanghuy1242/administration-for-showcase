import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { getStyle } from './Dashboard.style';
import { ProjectList } from '../../components/ProjectList/ProjectList';

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
      selectedProjectId: 1
    };
  }

  onSelectedProjectChanged = (id) => {
    this.setState({ selectedProjectId: id });
    console.log(id);
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack horizontal className={classNames.dashboardWrapper}>
        <Stack.Item className={classNames.leftPanel}>
          <ProjectList
            projects={this.state.projects}
            selected={this.state.selectedProjectId}
            onSelectedProjectChanged={this.onSelectedProjectChanged}
          />
        </Stack.Item>
        <Stack.Item grow disableShrink className={classNames.rightPanel}>
          Right
        </Stack.Item>
      </Stack>
    );
  }
}