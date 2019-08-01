import axios from 'axios';
// import { AuthApi } from './auth.api';

const instance = axios.create({
  baseURL: "https://project-showcase-api.herokuapp.com",
  responseType: "json",
  timeout: 30000
}); 
// const isFetching = false; // ngăn các request khác cũng chạy phần refresh token

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.withCredentials = true;

export default instance;