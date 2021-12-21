import { apiGetDetailProduct } from "./../../api/product/index";

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
};
