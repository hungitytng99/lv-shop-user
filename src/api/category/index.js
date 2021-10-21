import { GET, PUT, POST, DELETE } from "../fetch"
import { REQUEST_STATE } from "../../app-configs/index"
// Data Flow: Step 1

export const apiListCategory = async (params) => {
    try {
        const response = await GET("/cate/list", params, { isFullPath: false })
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
