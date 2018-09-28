import axios from 'axios';
import { baseEndpoint } from '../constants/api-enpoints';

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
  get: invoke(baseEndpoint, 'GET'),
  post: invoke(baseEndpoint, 'POST'),
  put: invoke(baseEndpoint, 'PUT'),
  delete: invoke(baseEndpoint, 'DELETE')
}
