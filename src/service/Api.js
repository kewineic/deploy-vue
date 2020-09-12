import axios from 'axios';
import store from '../store';

const Api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Accept': 'application/json',
    'Content': 'application/json' 
  }
});

Api.interceptors.request.use(
  (config) => {
    const token = store.state.token;
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (err) => {
    return Promise.reject(err);
  }
)

export default Api;