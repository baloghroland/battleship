import axios from 'axios';
import { API_ENDPOINT } from '../constants';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.responseType = 'json';

const invoke = (baseURL, method) => async (path, body, token, { headers = {}, query = {}, form = false } = {}) => {
  try {
    const response = await axios({
      method,
      url: path,
      baseURL,
      headers: headers,
      params: query,
      data: form ? JSON.stringify(body) : body
    });

    return response.data;
  } catch (error) {
    const { status } = error.response;
    if (!error.response || status === 401) throw error;
    console.log(error.response.data);
  }
};

export default {
  get: invoke(API_ENDPOINT, 'GET'),
  post: invoke(API_ENDPOINT, 'POST'),
  put: invoke(API_ENDPOINT, 'PUT'),
  delete: invoke(API_ENDPOINT, 'DELETE')
}
