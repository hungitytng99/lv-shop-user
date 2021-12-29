import { apiGetWards } from "src/api/address";
import { apiGetDistricts } from "src/api/address";
import { apiGetProvinces } from "src/api/address";

export const addressService = {
    getProvinces: function (token) {
        return apiGetProvinces(token).then((response) => {
            return response;
        });
    },
    getDistricts: function (provinceId, token) {
        return apiGetDistricts(provinceId, token).then((response) => {
            return response;
        });
    },
    getWards: function (districtId, token) {
        return apiGetWards(districtId, token).then((response) => {
            return response;
        });
    },
};
