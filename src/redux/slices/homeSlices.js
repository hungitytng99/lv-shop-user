import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// 1.2 REDUX ASYNC: Create async reducer
export const fetchUserById = createAsyncThunk("users/fetchUserById", async (params, thunkAPI) => {
    const { dispatch, getState, extra, requestId, signal } = thunkAPI
    dispatch(anotherReducer())
    const response = await axios.get(`https://reqres.in/api/users/${params.userId}`)
    return response.data
})

// 1. Redux guide: create slice
const homepageSlice = createSlice({
    name: "homepage",
    initialState: { user: {}, anotherData: "", errors: null },
    reducers: {
        // 1.1.1 REDUX STANDARD: Create standard reducer
        login(state, action) {
            state.user = action.payload
        },
        anotherReducer(state, action) {
            state.anotherData = "anotherData"
        },
    },
    extraReducers: (builder) => {
        // 1.2.1 REDUX ASYNC:Add async reducer
        // fulfilled: get data successfully
        // rejected: get data failed
        // pending: while get data
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.user = action.payload.data
        })
        builder.addCase(fetchUserById.rejected, (state, action) => {
            // state.user = action.payload.data;
            state.errors = action.error.message
        })
    },
})
// 1.1.2 REDUX STANDARD: Export reducer
export const { login, anotherReducer } = homepageSlice.actions
export default homepageSlice.reducer
