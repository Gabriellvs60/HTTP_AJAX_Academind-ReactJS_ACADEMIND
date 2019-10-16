import axios from 'axios';

//cria instancia do axios
const instance = axios.create({
    baseURL = 'https://jsonplaceholder.typicode.com'
});
//OVerride de config
instance.defaults.headers.commom['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

//instance.interceptors...
export default instance;