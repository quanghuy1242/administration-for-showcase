import axios from 'axios';

const instance = axios.create({
  baseURL: "https://project-showcase-api.herokuapp.com",
  responseType: "json",
}); 

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.withCredentials = true;

export default instance;