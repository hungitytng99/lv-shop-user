import { GET, PUT, POST, DELETE } from "../fetch";
import { REQUEST_STATE } from "../../app-configs/index";

export const apiAddProductToCart = async (params) => {
    // params = { variantId: 0, quantity: 0 };
    try {
        const response = await POST("/cart-items", params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
        };
    } catch (error) {
        console.log("error", error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};

export const apiUpdateItemInCart = async (idCartItem, params) => {
    // params = { variantId: 0, quantity: 0 };
    try {
        const response = await PUT(`/cart-items/${idCartItem}`, params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
        };
    } catch (error) {
        console.log("error", error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};

export const apiDeleteItemInCart = async (idCartItem) => {
    try {
        const response = await DELETE(`/cart-items/${idCartItem}`, null, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
        };
    } catch (error) {
        console.log("error", error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};

export const apiGetCart = async (params) => {
    try {
        const response = await GET("/cart", params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
        };
    } catch (error) {
        console.log("error", error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};

export const apiGetCheckoutData = async () => {
    try {
        const response = await GET("/user/cart/checkout", null, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
        };
    } catch (error) {
        console.log("error", error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};

export const apiOrder = async (params) => {
    try {
        const response = await POST("/orders", params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.result,
        };
    } catch (error) {
        console.log("error", error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};
