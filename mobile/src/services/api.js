import axios from "axios";

const api = axios.create({
    //exp://192.168.25.189:19000
    baseURL: 'http://192.168.25.189:3333',
});

export default api;