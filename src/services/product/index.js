import { apiGetDetailProduct } from "./../../api/product/index";

// transform data to fit with UI;
export const productService = {
    getDetailProduct: function (id) {
        return apiGetDetailProduct(id).then((response) => {
            return response;
        });
    },
};
