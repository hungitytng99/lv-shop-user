import { GET, PUT, POST, DELETE } from "../fetch"
import { REQUEST_STATE } from "../../app-configs/index"

export const apiLogin = async (params) => {
    try {
        const response = await POST("/user/sign-in", params, { isFullPath: false })
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response.data,
        }
    } catch (error) {
        console.log("error", error)
        return {
            state: REQUEST_STATE.ERROR,
            data: [],
        }
    }
}