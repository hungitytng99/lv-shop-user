import { GET, PUT, POST, DELETE } from "../fetch";
import { REQUEST_STATE } from "../../app-configs/index";

export const apiGetArticles = async (params, token) => {
    try {
        let param3 = { isFullPath: false };
        if (token !== undefined) {
            param3 = { isFullPath: false, headers: { Authorization: "Bearer " + token } };
        }
        const response = await GET("/articles", params, param3);
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
            total: response.total,
        };
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            data: [],
            total: 0,
        };
    }
};

export const apiGetArticlesById = async (id, token) => {
    try {
        let param3 = { isFullPath: false };
        if (token !== undefined) {
            param3 = { isFullPath: false, headers: { Authorization: "Bearer " + token } };
        }
        const response = await GET(`/articles/${id}`, null, param3);
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
        };
    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};
