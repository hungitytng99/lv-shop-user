import { createSlice } from "@reduxjs/toolkit"

const initialState = { name: "", avata: "" }
export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialState },
    reducers: {
        saveData: (state, action) => {
            state.value = action.payload
        },
        clearData: (state, action) => {
            state.value = initialState
        },
    },
})

export default userSlice.reducer
export const { saveData, clearData } = userSlice.actions
