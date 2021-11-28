import { createSlice } from "@reduxjs/toolkit"
import { userService } from "./../../services/user/index"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { storageKey } from "./../../constants/storageKeys"
import Cookies from "js-cookie"
import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { REQUEST_STATE } from "src/app-configs"

const initialState = {
    value: {},
    loading: true,
}

export const getVisitorInformation = createAsyncThunk("users/login", async (params, thunkAPI) => {
    if (Cookies.get(storageKey.Cookie_token)) {
        const response = await userService.getUserInforByToken()
        return response
    } else {
        const fpPromise = FingerprintJS.load()
        ;(async () => {
            // Get the visitor identifier when you need it.
            const fp = await fpPromise
            const result = await fp.get()
            const visitorId = result.visitorId
            const response = await userService.registerByDevice({ deviceId: visitorId })

            if (response.state === REQUEST_STATE.SUCCESS) Cookies.set(storageKey.Cookie_token, response.data.token)

            return response
        })()
    }
})

export const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        saveUserData: (state, action) => {
            state.value = action.payload
        },
        clearUserData: (state, action) => {
            state.value = initialState
        },
    },
    extraReducers: {
        [getVisitorInformation.pending]: (state, action) => {
            state.loading = true
        },
        [getVisitorInformation.fulfilled]: (state, action) => {
            state.value = action.payload
            state.loading = false
        },
        [getVisitorInformation.rejected]: (state, action) => {
            state.loading = false
        },
    },
})

export default userSlice.reducer
export const { saveUserData, clearUserData } = userSlice.actions
