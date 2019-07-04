import instance from "./axiosInstance"

export const profileApi = {

    getProfile(profileId) {
        return instance.get(`profile/` + profileId)
            .then(response => response.data);
    },

    getStatus(userId) {
        return instance.get(`profile/status/`+userId);
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status : status});

    }


};
