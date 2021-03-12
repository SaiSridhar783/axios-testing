import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

const options = {
    "headers": {
        "accept": "*/*",
        "api_key": "n^h[+}K'rr:)<jQ^#*4#k>MvCnIC,,nPv'B~H\\$7d^s]bj#;l1V'{Y,lQj6FsV**",
        "Content-Type": "application/json"
    },
    "data": {
        "{\"args\":{\"to\":\"919247336979@c.us\",\"content\":\"This is Sparta\"}}": ""
    },
    "mode": "cors"
}

axios.post("https://wpbot42.herokuapp.com/sendText",options).then((response) => console.log(response));

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
