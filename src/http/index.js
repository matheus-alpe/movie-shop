import axios from 'axios';
import { requestInterceptor } from './interceptors'

let config = {
    baseURL: process.env.VUE_APP_API_BASE_URL || '',
};

const api = axios.create(config);

api.interceptors.request.use(requestInterceptor);

export default api;
