import instance from "./axiosInstance"

export const profileApi = {

    getProfile(profileId) {
        return instance.get(`profile/` + profileId)
            .then(response => response.data);
    }


};
