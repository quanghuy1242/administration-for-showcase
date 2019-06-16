import api from './api';

export class AdministratorAPI {
  static async getAdminInfo() {
    const administrator = await api.get('/administrator');
    return administrator.data.administrator;
  }
}