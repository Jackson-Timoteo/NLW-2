import axios from 'axios';

const apo = axios.create({
    baseURL: 'http://localhost:3333',
})

export default axios;