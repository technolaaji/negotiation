import axios from 'axios';

const publicApi = axios.create({
    baseURL: "https://negotiationapp.herokuapp.com/"
});

export default publicApi;