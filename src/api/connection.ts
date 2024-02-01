import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_HOST,
});

export default API;
