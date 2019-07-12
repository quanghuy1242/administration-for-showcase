import React from 'react';
import { AppContext } from './AppContext';
import { CategoryAPI } from '../api/categories.api';
import { ProjectAPI } from '../api/projects.api';
import { AuthApi } from '../api/auth.api';

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
      isProjectLoaded: false,
      isTechLoaded: false,
      isProjectDetailLoaded: false,
      userLoginInformation: undefined,
      isUserLoginLoaded: false
    };
  }

  async componentDidMount() {
    if (this.getUserLoginInformation()) {
      await this.getTechnologies();
      await this.getProjectsOfSelectedTech(this.state.selectedTechId);
      await this.getSelectedProjectDetail(this.state.selectedProjectId);
    }
  }

  getTechnologies = async () => {
    const techs = await CategoryAPI.getCategories();
    this.setState({
      techs: techs,
      selectedTechId: techs[0].nameId
    });
    this.handleToggleTechLoaded();
  };

  getProjectsOfSelectedTech = async (nameId) => {
    const techDetail = await CategoryAPI.getCategory(nameId);
    this.setState({
      projects: techDetail.projects,
      selectedProjectId: techDetail.projects[0] ? techDetail.projects[0]._id : null
    });
    this.handleToggleProjectLoaded();
  }

  getSelectedProjectDetail = async (id) => {
    if (!id) {
      this.handleToggleProjectDetailLoaded();
      return;
    }
    const project = await ProjectAPI.getProject(id);
    this.setState({ selectedProjectDetail: project });
    this.handleToggleProjectDetailLoaded();
  }

  getUserLoginInformation = async () => {
    const isAuthenticated = await AuthApi.isAuthenticated();
    this.setState({ isUserLoginLoaded: true });
    if (isAuthenticated) {
      this.setState({ userLoginInformation: isAuthenticated });
      return true;
    } else {
      this.setState({ userLoginInformation: null });
      return false;
    }
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

  handleToggleTechLoaded = () => {
    this.setState({ isTechLoaded: !this.state.isTechLoaded });
  }

  handleToggleProjectDetailLoaded = () => {
    this.setState({ isProjectDetailLoaded: !this.state.isProjectDetailLoaded });
  }

  handleToggleUserLoginInforLoaded = () => {
    this.setState({ isUserLoginLoaded: !this.state.isUserLoginLoaded });
  }

  handleClearUserLoginInfo = () => {
    this.setState({ userLoginInformation: null });
  }

  handleAddNewTech = async tech => {
    if (await CategoryAPI.addNewTech(tech)) {
      const techs = await CategoryAPI.getCategories();
      this.setState({ techs: techs });
      return true;
    }
    return false;
  }

  render() {
    const value = {
      ...this.state,
      onSelectedTechChanged: this.onSelectedTechChanged,
      onSelectedProjectChanged: this.onSelectedProjectChanged,
      getUserLoginInformation: this.getUserLoginInformation,
      handleClearUserLoginInfo: this.handleClearUserLoginInfo,
      handleAddNewTech: this.handleAddNewTech
    }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}