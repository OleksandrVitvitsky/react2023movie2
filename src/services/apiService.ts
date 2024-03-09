import axios from "axios";
import {baseURL, token} from "../constants";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${token}`
    return request
});

export {
    apiService
}
