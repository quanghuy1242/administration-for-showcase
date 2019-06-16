import axios from 'axios';

export default axios.create({
  baseURL: "https://project-showcase-api.herokuapp.com",
  responseType: "json"
}); 