import axios from 'axios';

export const get = (url, options) => {
  return axios.get(url, options);
};

export const post = (url, options) => { 
  return axios.post(url, options);
};  
