import * as axios from "axios/index";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "64e31b17-af11-490f-9012-43103a404281"
    }
    });

export default instance;