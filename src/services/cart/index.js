import { apiAddProductToCart, apiGetCart } from "./../../api/cart/index";

export const cartService = {
    addProductToCart: function (params) {
        return apiAddProductToCart(params).then((response) => {
            response.data;
            return response;
        });
    },

    getUserCart: function () {
        return apiGetCart().then((response) => {
            return response;
        });
    },
};
