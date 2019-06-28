import api from './api';

export class AuthApi {
  static async isAuthenticated() {
    try {
      await api.post('/auth/isAuthenticated');
      return true;
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
}