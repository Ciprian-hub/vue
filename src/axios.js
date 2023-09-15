import axios from "axios";
import store from "./store";

let axiosClient;
axiosClient = axios.create({
    baseURL: `https://api-smartcoder.online/api`
});
axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config;
})
export default axiosClient