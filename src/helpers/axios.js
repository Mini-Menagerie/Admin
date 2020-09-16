import axios from 'axios';
let token = JSON.parse(localStorage.getItem('token'));

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

export default axios;