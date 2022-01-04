import { GET, PUT, POST, DELETE, UPLOAD } from "../fetch";
import { REQUEST_STATE } from "../../app-configs/index";
import { storageKey } from "./../../constants/storageKeys";

export const apiLogin = async (params) => {
    try {
        const response = await POST("/auth/login", params, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        // console.log("apiLogin", result);
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};
export const apiRegisterNewAccount = async (params) => {
    try {
        const response = await POST("/auth/register", params, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        // console.log("apiLogin", result);
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};

export const apiChangePass = async (params) => {
    try {
        const response = await PUT("/me/password", params, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        // console.log("apiLogin", result);
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};

export const apiRegisterByDevice = async (params) => {
    try {
        const response = await POST("/auth/register-by-device", params, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        // console.log("apiRegisterByDevice", result);
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};

export const apiGetUserInforbyToken = async (params) => {
    try {
        const response = await GET("/me", params, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        // console.log("apiGetUserInforbyToken", result);
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};

export const apiUpdateUserInfor = async (params) => {
    try {
        const response = await PUT("/me", params, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};

export const apiCreateUserMeta = async (params) => {
    try {
        const response = await POST("/user-metas", params, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};

export const apiGetUserMeta = async (key, params) => {
    try {
        const response = await GET(`/user-metas?key=${key}`, params, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: [],
        };
    }
};

export const apiUpdateUserMetaById = async (id, params) => {
    try {
        const response = await PUT(`/user-metas/${id}`, params, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};

export const apiDeleteUserMetaById = async (id) => {
    try {
        const response = await DELETE(`/user-metas/${id}`, null, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};

export const apiUploadImg = async (file) => {
    try {
        const response = await UPLOAD(`/media/`, file, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};

export const apiGetUserOrders = async (params) => {
    try {
        const response = await GET(`/user/orders`, params, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
            total: response.total,
        };
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            total: 0,
            data: [],
        };
    }
};

export const apiUpdateStateOrders = async (id, status) => {
    try {
        const response = await PUT(`/user/orders/${id}`, { status: status }, { isFullPath: false });
        const result = {
            data: response.result,
            state: REQUEST_STATE.SUCCESS,
        };
        return result;
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            error: error,
            data: {},
        };
    }
};
