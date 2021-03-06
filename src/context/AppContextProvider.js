import React from 'react';
import { AppContext } from './AppContext';
import { CategoryAPI } from '../api/categories.api';
import { ProjectAPI } from '../api/projects.api';
import { AuthApi } from '../api/auth.api';
import { AdministratorAPI } from '../api/administrator.api';

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
      administrator: {},
      isProjectLoaded: false,
      isTechLoaded: false,
      isProjectDetailLoaded: false,
      userLoginInformation: undefined,
      isUserLoginLoaded: false,
      isProjectModified: false
    };
  }

  async componentDidMount() {
    if (this.getUserLoginInformation()) {
      await this.getTechnologies();
      await this.getProjectsOfSelectedTech(this.state.selectedTechId);
      await this.getSelectedProjectDetail(this.state.selectedProjectId);
      await this.getAdminInformation();
    }
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (nextState.selectedTechId !== this.state.selectedTechId) {
      if (this.getUserLoginInformation()) {
        await this.getProjectsOfSelectedTech(nextState.selectedTechId);
        await this.getSelectedProjectDetail(this.state.selectedProjectId);
      }
    }
    else if (nextState.selectedProjectId !== this.state.selectedProjectId) {
      await this.getSelectedProjectDetail(nextState.selectedProjectId);
    }
    return true;
  }

  getAdminInformation = async () => {
    const info = await AdministratorAPI.getAdminInfo();
    this.setState({ administrator: info });
  }

  getTechnologies = async () => {
    this.handleToggleTechLoaded(false);
    const techs = await CategoryAPI.getCategories();
    this.setState({
      techs: techs,
      selectedTechId: techs[0].nameId
    });
    this.handleToggleTechLoaded(true);
  };

  getProjectsOfSelectedTech = async (nameId) => {
    this.handleToggleProjectLoaded(false);
    const techDetail = await CategoryAPI.getCategory(nameId);
    this.setState({
      projects: techDetail.projects,
      selectedProjectId: techDetail.projects[0] ? techDetail.projects[0]._id : null
    });
    this.handleToggleProjectLoaded(true);
  }

  getSelectedProjectDetail = async (id) => {
    this.handleToggleProjectDetailLoaded(true);
    if (!id) {
      this.setState({ selectedProjectDetail: { technology: {}, screenshots: [] } });
      this.handleToggleProjectDetailLoaded(true);
      return;
    }
    const project = await ProjectAPI.getProject(id);
    this.setState({ selectedProjectDetail: project });
    this.handleToggleProjectDetailLoaded(true);
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
    this.handleToggleModifiedProject(false);
    this.setState({ selectedProjectId: id });
  }

  onSelectedTechChanged = (id) => {
    this.handleToggleModifiedProject(false);
    this.setState({ selectedTechId: id });
  }

  handleToggleProjectLoaded = (isDone) => {
    this.setState({ isProjectLoaded: isDone });
  }

  handleToggleTechLoaded = (isDone) => {
    this.setState({ isTechLoaded: isDone });
  }

  handleToggleProjectDetailLoaded = (isDone) => {
    this.setState({ isProjectDetailLoaded: isDone });
  }

  handleToggleUserLoginInforLoaded = (isDone) => {
    this.setState({ isUserLoginLoaded: isDone });
  }

  handleToggleModifiedProject = (isModified) => {
    this.setState({ isProjectModified: isModified });
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

  handleEditTech = async tech => {
    if (await CategoryAPI.editTech(tech)) {
      const techs = await CategoryAPI.getCategories();
      this.setState({ techs: techs });
      return true;
    }
    return false;
  }

  // modified selected project
  handleLocalModified = (field, data) => {
    // Nếu dữ liêu không có gì thay đổi thì thôi đừng sửa
    if (JSON.stringify(data) === JSON.stringify(this.state.selectedProjectDetail[field])) {
      return;
    }
    this.handleToggleModifiedProject(true);
    this.setState(state => {
      state.selectedProjectDetail[field] = data
      return state;
    });
  }

  // Thay đổi data của project vừa sửa trong project list
  handleModifiedProjectList = projectModified => {
    this.setState(state => {
      state.projects.map((project, index) => {
        if (project._id === projectModified._id) {
          state.projects[index] = projectModified;
        }
        return 1;
      });
      return state;
    })
  }

  // save current project information to database
  handleSaveSelectedProject = async () => {
    const data = {
      ...this.state.selectedProjectDetail,
      technology: this.state.selectedProjectDetail.technology._id
    }
    if (await ProjectAPI.editProject(data)) {
      this.handleToggleModifiedProject(false);
      this.handleModifiedProjectList(data);
    }
  }

  // add new project to selected tech
  handleAddNewProject = async project => {
    if (await ProjectAPI.addProject(project)) {
      await this.getProjectsOfSelectedTech(this.state.selectedTechId);
      return true;
    }
    return false;
  }

  // delete project
  handleDeleteProject = async _id => {
    if (await ProjectAPI.deleteProject(_id)) {
      await this.getProjectsOfSelectedTech(this.state.selectedTechId);
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
      handleAddNewTech: this.handleAddNewTech,
      handleEditTech: this.handleEditTech,
      handleLocalModified: this.handleLocalModified,
      handleToggleModifiedProject: this.handleToggleModifiedProject,
      handleSaveSelectedProject: this.handleSaveSelectedProject,
      handleAddNewProject: this.handleAddNewProject,
      handleDeleteProject: this.handleDeleteProject
    }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}