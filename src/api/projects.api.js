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

  static async editProject(project) {
    try {
      await api.put(`/projects/${project._id}`, { project: project });
      return true;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      alert('Có lỗi xảy ra!');
      return false;
    }
  }

  static async addProject(project) {
    try {
      await api.post('/projects', { project: project });
      return true;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      alert('Có lỗi xảy ra!');
      return false;
    }
  }

  static async deleteProject(_id) {
    try {
      await api.delete(`/projects/${_id}`);
      return true;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      alert('Có lỗi xảy ra!');
      return false;
    }
  }
}
