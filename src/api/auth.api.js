import api from './api';

export class AuthApi {
  static async isAuthenticated(fullDetail = true) {
    try {
      const res = await api.post('/auth/isAuthenticated', { fullDetail: fullDetail });
      return res.data;
    } catch (error) {
      return false;
    }
  }

  static async login({ username, password }) {
    try {
      await api.post('/auth/login', {
        username: username,
        password: password
      })
      return true;
    } catch (error) {
      return false;
    }
  }

  static async logout() {
    try {
      await api.post('/auth/logout');
      return true;
    } catch (error) {
      return false;
    }
  }

  static async refreshToken() {
    try {
      await api.post('/auth/refresh_token');
    } catch (error) {
      console.error(error);
    }
  }
}