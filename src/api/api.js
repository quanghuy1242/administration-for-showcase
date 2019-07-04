import axios from 'axios';
import { AuthApi } from './auth.api';

const instance = axios.create({
  baseURL: "https://project-showcase-api.herokuapp.com",
  responseType: "json",
  timeout: 30000
}); 
const isFetching = false; // ngăn các request khác cũng chạy phần refresh token

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.withCredentials = true;

function logout() {
  try {
    (async () => {
      await AuthApi.logout();
      window.location = '/';
    })();
  } catch (error) {
    console.error(error);
  }
}

instance.interceptors.response.use(undefined, err => {
  return new Promise(async (resolve, reject) => {
    if (err.config.url === '/auth/logout') return reject(err);
    if (err.response.status === 403) return resolve(logout);
    if (err.response.status !== 401) return reject(err);
    
    try {
      if (!isFetching) {
        isFetching = true;
        await AuthApi.refreshToken();
        return resolve(axios(err.config));
      }
    } catch (error) {
      console.error(error);
      return resolve(logout);
    }
  });
});

export default instance;