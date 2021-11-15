import { apiLogin } from "src/api/user"

export const userService = {
    registerByDevice: function (params) {},
    login: function (params) {
        return apiLogin(params).then((response) => {
            return response
        })
    },
}
