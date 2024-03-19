import axios from 'axios'


const contentHeaders = (type: 'form' | 'json') => {

    const headers = {
        Accept: 'application/json', 
        withCredentials: true,
        'Content-Type': type == 'json' ? 'application/json' : 'multipart/form-data',
    }
    return headers;


    


}