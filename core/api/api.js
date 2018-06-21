import axios from 'axios'
import { storage } from "../../store/storage";

export const client = axios.create({
    baseURL: 'http://10.102.106.9:4000/api',
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
    }
})

const onResponseFulfilled = async (config) => {
    const token = await storage.token
    if (token !== null) {
        config.headers.access_token = token;
    }
    return config;
};


const onResponseRejected = (error) => {
    const {status} = error.response
    if (status === 401) {
        setToken(null)
    }
    return Promise.reject(error)
}

client.interceptors.request.use(
    onResponseFulfilled,
    onResponseRejected
)