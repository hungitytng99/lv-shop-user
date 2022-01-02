import { apiRegisterNewAccount } from "src/api/user";
import { apiGetUserInforbyToken } from "src/api/user";
import { apiLogin, apiRegisterByDevice } from "src/api/user";
import { apiChangePass } from "./../../api/user/index";

export const userService = {
    registerByDevice: function (params) {
        return apiRegisterByDevice(params).then((response) => {
            return response;
        });
    },

    register: function (params) {
        return apiRegisterNewAccount(params).then((response) => {
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
    changePassword: function (params) {
        return apiChangePass(params).then((response) => {
            return response;
        });
    },
};
