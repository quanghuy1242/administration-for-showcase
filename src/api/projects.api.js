import api from './api';

export class ProjectAPI {
  static async getProjects(isCompact = false) {
    let projectsRespone = await api.get('/projects', { params: { compact: isCompact } });
    return projectsRespone.data.projects;
  }

  static async getProject(projectsId) {
    let projectRespone = await api.get(`/projects/${projectsId}`);
    return projectRespone.data.project;
  }
}
