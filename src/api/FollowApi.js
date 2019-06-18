import instance from "./axiosInstance"

export const followApi = {

    getStatus(userId) {
        let queryPath = `follow/${userId}`;
                return instance.get(queryPath)
            .then(response => response.data);
    },

    follow(userId) {
        let queryPath = `follow/${userId}`;
        return instance.post(queryPath);
    },

    unfollow(userId) {
        let queryPath = `follow/${userId}`;
        return instance.delete(queryPath);
    }

};
