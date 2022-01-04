import { apiRegisterNewAccount } from "src/api/user";
import { apiGetUserInforbyToken } from "src/api/user";
import { apiLogin, apiRegisterByDevice } from "src/api/user";
import { REQUEST_STATE } from "src/app-configs";
import {
    apiChangePass,
    apiCreateUserMeta,
    apiDeleteUserMetaById,
    apiGetUserMeta,
    apiGetUserOrders,
    apiUpdateUserInfor,
    apiUpdateStateOrders,
    apiUpdateUserMetaById,
    apiUploadImg,
} from "./../../api/user/index";
import { userMetaKeys } from "./../../constants/userMetaKeys";

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
    updateInfor: function (params) {
        return apiUpdateUserInfor(params).then((response) => {
            return response;
        });
    },

    createAddressUser: function (value) {
        return apiCreateUserMeta({ key: userMetaKeys.ADDRESS_USER, value: JSON.stringify(value) }).then((response) => {
            return response;
        });
    },

    getListAddressUser: function () {
        return apiGetUserMeta(userMetaKeys.ADDRESS_USER).then((response) => {
            if (response.data[0] == undefined) {
                return {
                    ...response,
                    data: [],
                };
            } else {
                return {
                    ...response,
                    data: response.data.map((item) => {
                        return {
                            idMeta: item.id,
                            key: item.key,
                            value: JSON.parse(item.value) || {},
                        };
                    }),
                };
            }
        });
    },
    updateAddressUser: function (id, value) {
        return apiUpdateUserMetaById(id, { key: userMetaKeys.ADDRESS_USER, value: JSON.stringify(value) }).then((response) => {
            return response;
        });
    },
    deleteMetaData: function (id) {
        return apiDeleteUserMetaById(id).then((response) => {
            return response;
        });
    },
    uploadImg: function (file) {
        return apiUploadImg(file).then((response) => {
            return response;
        });
    },
    getUserOrders: function (params) {
        return apiGetUserOrders(params).then((response) => {
            return response;
        });
    },
    updateOrderState: function (id, status) {
        return apiUpdateStateOrders(id, status).then((response) => {
            return response;
        });
    },
};
