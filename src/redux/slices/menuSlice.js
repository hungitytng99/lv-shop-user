import { createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
    name: "menu",
    initialState: { value: [] },
    reducers: {
        saveMenuData: (state, action) => {
            state.value = action.payload
        },
    },
})

export default menuSlice.reducer
export const { saveMenuData } = menuSlice.actions
