import instance from "./axiosInstance"


export const authApi = {

    authorize() {
        return instance.get('auth/me')
            .then(response => response.data);
    }

};
