import React from 'react';
import { AppContext } from './AppContext';
import { CategoryAPI } from '../api/categories.api';
import { ProjectAPI } from '../api/projects.api';

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      techs: [],
      selectedProjectId: undefined,
      selectedTechId: undefined,
      selectedProjectDetail: {
        technology: {},
        screenshots: []
      },
      isProjectLoaded: false
    };
  }

  async componentDidMount() {
    await this.getTechnologies();
    await this.getProjectsOfSelectedTech(this.state.selectedTechId);
    await this.getSelectedProjectDetail(this.state.selectedProjectId);
  }

  getTechnologies = async () => {
    const techs = await CategoryAPI.getCategories();
    this.setState({
      techs: techs,
      selectedTechId: techs[0].nameId
    });
  };

  getProjectsOfSelectedTech = async (nameId) => {
    const techDetail = await CategoryAPI.getCategory(nameId);
    this.setState({
      projects: techDetail.projects,
      selectedProjectId: techDetail.projects[0]._id
    });
    this.handleToggleProjectLoaded();
  }

  getSelectedProjectDetail = async (id) => {
    const project = await ProjectAPI.getProject(id);
    this.setState({ selectedProjectDetail: project });
  }

  onSelectedProjectChanged = (id) => {
    this.setState({ selectedProjectId: id });
  }

  onSelectedTechChanged = (id) => {
    this.setState({ selectedTechId: id });
  }

  handleToggleProjectLoaded = () => {
    this.setState({ isProjectLoaded: !this.state.isProjectLoaded });
  }

  render() {
    const value = {
      ...this.state,
      onSelectedTechChanged: this.onSelectedTechChanged,
      onSelectedProjectChanged: this.onSelectedProjectChanged
    }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}