import axios from 'axios';

const publicApi = axios.create({
    baseURL: "http://localhost:4000"
});

export default publicApi;