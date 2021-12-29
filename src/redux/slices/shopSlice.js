import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { shopService } from "./../../services/shop/index";

export const getShopInfor = createAsyncThunk("shop_info/get_shop_info", async () => {
    const response = await shopService.getShopInfor();
    return response;
});

export const shopSlice = createSlice({
    name: "shop_info",
    initialState: { value: {}, loading: false },
    reducers: {},
    extraReducers: {
        [getShopInfor.pending]: (state, action) => {
            state.loading = true;
        },
        [getShopInfor.fulfilled]: (state, action) => {
            state.value = action.payload;
            state.loading = false;
        },
        [getShopInfor.rejected]: (state, action) => {
            state.value = action.payload;
            state.loading = false;
        },
    },
});

export default shopSlice.reducer;
export const {} = shopSlice.actions;
