import { GET, PUT, POST, DELETE } from "../fetch";
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
