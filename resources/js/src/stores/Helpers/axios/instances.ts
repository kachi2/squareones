import axios from 'axios'

// @ts-ignore
import Cookies from 'js-cookie';

const hostURL = 'http://127.0.0.1:8000';
const apiURL = `${hostURL}/api/`;

const contentHeaders = (type: 'form' | 'json') => {
    return {
        Accept: 'application/json',
        withCredentials: true,
        'Content-Type': type == 'json' ? 'application/json' : 'multipart/form-data',
    }
}

// create instances #######################################################
const $instance = axios.create({
    baseURL: apiURL,
    headers: contentHeaders('json')
})

const $instanceForm = axios.create({
    baseURL: apiURL,
    headers: contentHeaders('form'),
})

// create interceptor for renewing token ##########################################3
const setAuthorization = (config: any) => {
    // const token = Cookies.get('_tokn');
    const token = '1|tpqrFc7dTkg8IoB7IpYutRjBqgvjI9wypkAh4ful23fc99b6'
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};

// Set interceptors
$instance.interceptors.request.use(setAuthorization);
$instanceForm.interceptors.request.use(setAuthorization);


export {
    $instance, $instanceForm
}