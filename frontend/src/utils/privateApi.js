import axios from 'axios';
import { getToken, deleteToken } from './token';
import { navigate } from '@reach/router';

const privateApi = axios.create({
    baseURL: "http://localhost:4000"
});

privateApi.interceptors.request.use(
    config => {
        const token = getToken();
        if(token){
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

privateApi.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error.response.status === 401){
            deleteToken();
            navigate('/signin');
            return Promise.reject(error);
        }
    }
);

export default privateApi