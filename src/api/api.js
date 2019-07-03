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

// instance.interceptors.response.use(undefined, async err => {
//   if (err.response.status === 403) return await AuthApi.logout();
//   if (err.response.status !== 401) return Promise.reject(err);
  
//   if (!isFetching) {
//     isFetching = true; // lỡ mà có nhiều request thì chặn cái sau refresh
//     try {
//       await AuthApi.refreshToken();
//       return Promise.resolve(axios(err.config));
//     } catch (error) {
//       return await AuthApi.logout();
//     }
//   }
// });

export default instance;