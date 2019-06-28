import api from './api';

export class AuthApi {
  static isAuthenticated() {
    api.post('/auth/isAuthenticated')
    .then(response => {
      console.log(response);
      return true;
    })
    .catch(err => {
      console.log(err.response);
      return false;
    }); 
  }
}