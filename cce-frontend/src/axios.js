import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://103.119.92.91:3050'
});

export default instance;