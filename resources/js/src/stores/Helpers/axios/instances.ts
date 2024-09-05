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

const setAuthorization = (config: any) => {
    const token = Cookies.get('_tokn');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};

const $instance = axios.create({
    baseURL: apiURL,
    headers: contentHeaders('json')
})

const $instanceForm = axios.create({
    baseURL: apiURL,
    headers: contentHeaders('form'),
})

// Set interceptors
$instance.interceptors.request.use(setAuthorization);
$instanceForm.interceptors.request.use(setAuthorization);


export {
    $instance, $instanceForm
}