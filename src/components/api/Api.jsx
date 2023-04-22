import axios from 'axios';

export function APIGet(path) {
    const api = axios.create({
        baseURL: "http://localhost:3001"
    });
    
    const info = api.get(path)
        .then((data)=> {
            return data
        }
    )
    return info
}

export function APIPost(path, data) {
    const api = axios.create({
        baseURL: "http://localhost:3001",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const info = api.post(
        path,
        data)
        .then((retorno)=> {
            return retorno
        }
    )
    return info
}



