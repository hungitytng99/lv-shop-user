import { getStateProduct } from "src/share_function";
import { apiGetDetailProduct, apiGetListProduct } from "./../../api/product/index";

// transform data to fit with UI;
export const productService = {
    getDetailProduct: function (id) {
        return apiGetDetailProduct(id).then((response) => {
            const dataFillter = {
                id: response.data?.id,
                url: response.data?.url || "#",
                title: response.data?.title || "",
                curPrice: response.data?.price || 0,
                oldPrice: response.data?.comparePrice || 0,
                trademark: response.data?.vendor.name || "Đang cập nhật",
                status: response.data?.status || "Đang cập nhật",
                productInfo: response.data?.description || "Đang cập nhật",
                options: response.data?.options || [],
                listImg: response.data?.media || [],
                variants: response.data?.variants.map((variant, index) => {
                    return {
                        oldPrice: variant?.comparePrice || 0,
                        curPrice: variant?.price || 0,
                        featureImageId: variant?.featureImageId,
                        available: variant?.available || false,
                        availableNumber: variant?.availableNumber || 0,
                        existByOptions: variant?.options || [],
                        publicTitle: variant?.publicTitle || "Tiện ích Lộc Vừng shop",
                    };
                }),
            };
            return {
                ...response,
                data: dataFillter,
            };
        });
    },
    getListProduct: function (params, token) {
        return apiGetListProduct(params, token).then((response) => {
            const dataFillter = response.data.listProduct.map((val) => {
                return {
                    id: val?.id || null,
                    urlImg: `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${val?.featureImageId}`,
                    urlProduct: `/san-pham?product_id=${val?.url}` || "#",
                    title: val?.title || "",
                    curPrice: val?.price || 0,
                    oldPrice: val?.comparePrice || 0,
                    status: getStateProduct(val?.createdAt, val?.price || 0, val?.comparePrice || 0),
                };
            });
            return {
                ...response,
                data: {
                    ...response.data,
                    listProduct: dataFillter,
                },
            };
        });
    },
};
