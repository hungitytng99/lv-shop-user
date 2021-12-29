import { apiGetShopInfor } from "./../../api/shop/index";

export const shopService = {
    getShopInfor: function (token) {
        return apiGetShopInfor(token).then((response) => {
            return response;
        });
    },
};
