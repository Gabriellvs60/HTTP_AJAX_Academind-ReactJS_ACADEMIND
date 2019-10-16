import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import Axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.commom['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json;'
//bloqueiam requests se não der o retorno 
axios.interceptors.request.use(request => {
    console.log(request);
    //Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.request.use(response => {
    console.log(response);
    //Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use();


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
