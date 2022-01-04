import { apiAddProductToCart, apiGetCart, apiGetCheckoutData, apiUpdateItemInCart, apiDeleteItemInCart, apiOrder, apiCheckCartAvailable } from "./../../api/cart/index";

export const cartService = {
    addProductToCart: function (params) {
        // params = { variantId: 0, quantity: 0 };
        return apiAddProductToCart(params).then((response) => {
            return {
                totalProduct: response.data.totalCountItems || 0,
                totalPrice: response.data.totalPrice || 0,
                totalComparePrice: response.data.totalComparePrice || 0,
                products:
                    response.data.cartItems?.map((item) => {
                        return {
                            id: item.id,
                            variantId: item.variant.id,
                            urlImg: `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${item.variant?.featureImageId}`,
                            title: item.variant?.product?.title,
                            availableNumber: item.variant?.availableNumber,
                            price: item.variant?.price,
                            quantity: item.quantity,
                            urlProduct: `/san-pham?product=${item?.variant?.product?.id}-${item?.variant?.product?.url}`,
                            totalPrice: item.linePrice || 0,
                            totalComparePrice: item.lineComparePrice || 0,
                            variantTitle: item.variant?.publicTitle || "",
                        };
                    }) || [],
            };
        });
    },
    updateProductInCart: function (idCartItem, params) {
        // params = { variantId: 0, quantity: 0 };
        return apiUpdateItemInCart(idCartItem, params).then((response) => {
            return {
                totalProduct: response.data.totalCountItems || 0,
                totalPrice: response.data.totalPrice || 0,
                totalComparePrice: response.data.totalComparePrice || 0,
                products:
                    response.data.cartItems?.map((item) => {
                        return {
                            id: item.id,
                            variantId: item.variant.id,
                            urlImg: `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${item.variant?.featureImageId}`,
                            title: item.variant?.product?.title,
                            availableNumber: item.variant?.availableNumber,
                            price: item.variant?.price,
                            quantity: item.quantity,
                            urlProduct: `/san-pham?product=${item?.variant?.product?.id}-${item?.variant?.product?.url}`,
                            totalPrice: item.linePrice || 0,
                            totalComparePrice: item.lineComparePrice || 0,
                            variantTitle: item.variant?.publicTitle || "",
                        };
                    }) || [],
            };
        });
    },
    deleteCartItem: function (idCartItem) {
        return apiDeleteItemInCart(idCartItem).then((response) => {
            return {
                totalProduct: response.data.totalCountItems || 0,
                totalPrice: response.data.totalPrice || 0,
                totalComparePrice: response.data.totalComparePrice || 0,
                products:
                    response.data.cartItems?.map((item) => {
                        return {
                            id: item.id,
                            variantId: item.variant.id,
                            urlImg: `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${item.variant?.featureImageId}`,
                            title: item.variant?.product?.title,
                            availableNumber: item.variant?.availableNumber,
                            price: item.variant?.price,
                            quantity: item.quantity,
                            urlProduct: `/san-pham?product=${item?.variant?.product?.id}-${item?.variant?.product?.url}`,
                            totalPrice: item.linePrice || 0,
                            totalComparePrice: item.lineComparePrice || 0,
                            variantTitle: item.variant?.publicTitle || "",
                        };
                    }) || [],
            };
        });
    },

    getUserCart: function () {
        return apiGetCart().then((response) => {
            return {
                totalProduct: response.data.totalCountItems || 0,
                totalPrice: response.data.totalPrice || 0,
                totalComparePrice: response.data.totalComparePrice || 0,
                products:
                    response.data.cartItems?.map((item) => {
                        return {
                            id: item.id,
                            variantId: item.variant.id,
                            urlImg: `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${item.variant?.featureImageId}`,
                            title: item.variant?.product?.title,
                            price: item.variant?.price,
                            availableNumber: item.variant?.availableNumber,
                            quantity: item.quantity,
                            urlProduct: `/san-pham?product=${item?.variant?.product?.id}-${item?.variant?.product?.url}`,
                            totalPrice: item.linePrice || 0,
                            totalComparePrice: item.lineComparePrice || 0,
                            variantTitle: item.variant?.publicTitle || "",
                        };
                    }) || [],
            };
        });
    },
    getCheckoutData: function () {
        return apiGetCheckoutData().then((response) => {
            return {
                totalProduct: response.data.totalCountItems || 0,
                totalPrice: response.data.totalPrice || 0,
                totalComparePrice: response.data.totalComparePrice || 0,
                shipFee: response.data.shipFee || 0,
                finalPrice: response.data.finalPrice || 0,
                products:
                    response.data.cartItems?.map((item) => {
                        return {
                            id: item.id,
                            variantId: item.variant.id,
                            urlImg: `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${item.variant?.featureImageId}`,
                            title: item.variant?.product?.title,
                            availableNumber: item.variant?.availableNumber,
                            price: item.variant?.price,
                            quantity: item.quantity,
                            urlProduct: `/san-pham?product=${item?.variant?.product?.id}-${item?.variant?.product?.url}`,
                            totalPrice: item.linePrice || 0,
                            totalComparePrice: item.lineComparePrice || 0,
                            variantTitle: item.variant?.publicTitle || "",
                        };
                    }) || [],
            };
        });
    },
    orderProducts: function (params) {
        return apiOrder(params).then((response) => {
            return response;
        });
    },
    checkCartAvailableForCheckout: function () {
        return apiCheckCartAvailable().then((response) => {
            return response;
        });
    },
};
