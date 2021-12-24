import { GET, PUT, POST, DELETE } from "../fetch";
import { REQUEST_STATE } from "../../app-configs/index";

export const apiGetDetailProduct = async (id) => {
    try {
        const response = await GET(`/products/${id}`, null, { isFullPath: false });
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

export const apiGetListProduct = async (params, token) => {
    try {
        const response = await GET(`/products`, params, { isFullPath: false, headers: { Authorization: "Bearer " + token } });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: {
                listProduct: response.result,
                total: response.total,
            },
        };
    } catch (error) {
        console.log("error", error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: { listProduct: [], total: 0 },
        };
    }
};
