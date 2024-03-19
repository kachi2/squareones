import axios from 'axios'


const hostUrl = 'http://127.0.0.1:8000'


const contentHeaders = (type: 'form' | 'json') => {

    const headers = {
        Accept: 'application/json', 
        withCredentials: true,
        'Content-Type': type == 'json' ? 'application/json' : 'multipart/form-data',
    }
    return headers;


    


}