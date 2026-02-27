import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.PROD
        ? 'https://webstart-studio-react-app-production.up.railway.app/api'
        : 'http://localhost:5000/api'
});

export default API;