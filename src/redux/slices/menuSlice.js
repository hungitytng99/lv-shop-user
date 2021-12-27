import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collectionService } from "./../../services/collections/index";

export const getMenu = createAsyncThunk("menu/getMenu", async () => {
    const response = await collectionService.listCategory();
    return response;
});

export const menuSlice = createSlice({
    name: "menu",
    initialState: { value: { data: [] }, loading: false },
    reducers: {
        saveMenuData: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: {
        [getMenu.pending]: (state, action) => {
            state.loading = true;
        },
        [getMenu.fulfilled]: (state, action) => {
            state.value = action.payload;
            state.loading = false;
        },
        [getMenu.rejected]: (state, action) => {
            state.value = action.payload;
            state.loading = false;
        },
    },
});

export default menuSlice.reducer;
export const { saveMenuData } = menuSlice.actions;
