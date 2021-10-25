import { apiLogin } from "src/api/user"

export const userService = {
    login: function (params) {
        return apiLogin(params).then((response) => {
            return response
        })
    },
}
