import axios from 'axios';
import { getToken, deleteToken } from './token';
import { navigate } from '@reach/router';

const privateApi = axios.create({
    baseURL: "https://negotiationapp.herokuapp.com/"
});
// this is used to put the token on axios to send it to every response
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
// this interceptor is used to check if the token is expired then send the user to the homescreen
privateApi.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error.response.status === 401){
            deleteToken();
            navigate('/');
            return Promise.reject(error);
        }
    }
);

export default privateApi