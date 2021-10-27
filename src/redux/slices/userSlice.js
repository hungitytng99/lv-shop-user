import { createSlice } from "@reduxjs/toolkit"
import { userService } from "./../../services/user/index"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { storageKey } from "./../../constants/storageKeys"

const initialState = {
    value: {},
    loading: true,
}

export const userLogin = createAsyncThunk("users/login", async (formData, thunkAPI) => {
    const response = await userService.login(formData)
    return response
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
            localStorage.removeItem(storageKey.TOKEN)
        },
    },
    extraReducers: {
        [userLogin.pending]: (state, action) => {
            state.loading = true
        },
        [userLogin.fulfilled]: (state, action) => {
            state.value = action.payload
            state.loading = false
        },
        [userLogin.rejected]: (state, action) => {
            state.loading = false
        },
    },
})

export default userSlice.reducer
export const { saveUserData, clearUserData } = userSlice.actions
