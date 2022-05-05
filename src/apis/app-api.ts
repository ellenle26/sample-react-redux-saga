
// axios configuration

import { PORTERS_AUTH_KEY } from "../libs/const";
import globalAxios from "axios";
import { DefaultApi } from "./management/api";
import { Configuration } from "./management/configuration";


globalAxios.interceptors.request.use(
    function (request) {
        if (localStorage.getItem(PORTERS_AUTH_KEY)) {
            request.headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem(PORTERS_AUTH_KEY)}`
            }
        }
        return request;
    }
);

globalAxios.interceptors.response.use(
    function (response) {
        const headerToken = response.config.headers ? response.headers['authorization'] : '';
        headerToken && localStorage.setItem(PORTERS_AUTH_KEY, headerToken.toString().replace("bearer ", ""))
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export const managementApiClient = new DefaultApi(
    new Configuration(),
    `${process.env.apiUrl}`,
    globalAxios,
);
