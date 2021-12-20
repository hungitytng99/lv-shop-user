import { apiGetUserInforbyToken } from "src/api/user";
import { apiLogin, apiRegisterByDevice } from "src/api/user";

export const userService = {
    registerByDevice: function (params) {
        return apiRegisterByDevice(params).then((response) => {
            return response;
        });
    },

    login: function (params) {
        return apiLogin(params).then((response) => {
            return response;
        });
    },

    getUserInforByToken: function (params) {
        return apiGetUserInforbyToken(params).then((response) => {
            return response;
        });
    },
};
