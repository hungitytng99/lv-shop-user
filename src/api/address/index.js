import { GET, PUT, POST, DELETE } from "../fetch";
import { REQUEST_STATE } from "../../app-configs/index";

export const apiGetProvinces = async (token) => {
    try {
        let param3 = { isFullPath: false };
        if (token !== undefined) {
            param3 = { isFullPath: false, headers: { Authorization: "Bearer " + token } };
        }
        const response = await GET("/provinces", null, param3);
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
        };
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            data: [],
        };
    }
};

export const apiGetDistricts = async (provinceId, token) => {
    try {
        let param3 = { isFullPath: false };
        if (token !== undefined) {
            param3 = { isFullPath: false, headers: { Authorization: "Bearer " + token } };
        }
        const response = await GET(`/districts?provinceId=${provinceId}`, null, param3);
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
        };
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            data: [],
        };
    }
};

export const apiGetWards = async (districtId, token) => {
    try {
        let param3 = { isFullPath: false };
        if (token !== undefined) {
            param3 = { isFullPath: false, headers: { Authorization: "Bearer " + token } };
        }
        const response = await GET(`/wards?districtId=${districtId}`, null, param3);
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
        };
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            data: [],
        };
    }
};
