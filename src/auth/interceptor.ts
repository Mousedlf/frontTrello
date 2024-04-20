import axios from "axios";
import {Globals} from "../Common/globals.ts";


const axiosHttp = axios.create({
    baseURL: Globals.baseUrl,
});


axiosHttp.interceptors.request.use(
    // @ts-expect-error it's okay
    (config) => {
        const token =  localStorage.getItem("bearerToken")
        return {
            ...config,
            headers: {
                ...(token !== null && { Authorization: `Bearer ${token}` }),
                ...config.headers,
            },
        };
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosHttp.interceptors.response.use(
    (response) => {
        //const url = response.config.url;

        //setLocalStorageToken(token);
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            //(`unauthorized :)`);
            //localStorage.removeItem("persist:root");
            //removeLocalStorageToken
            //window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosHttp;