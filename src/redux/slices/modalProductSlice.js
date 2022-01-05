import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { chiTietSanPham } from "src/constants/dataTest";
import { productService } from "./../../services/product/index";

const initialState = {
    open: false,
    value: {},
    loading: false,
};

export const openProductModal = createAsyncThunk("modal_product/open_modal", async (productId, thunkAPI) => {
    // call api
    const response = await productService.getDetailProduct(productId);
    // console.log(response);
    return response;
});

export const modalProductSlice = createSlice({
    name: "modal_product",
    initialState: initialState,
    reducers: {
        closeProductModal: (state, action) => {
            state.value = {};
            state.loading = false;
            state.open = false;
        },
    },
    extraReducers: {
        [openProductModal.pending]: (state, action) => {
            state.loading = true;
            state.open = true;
        },
        [openProductModal.fulfilled]: (state, action) => {
            state.value = action.payload;
            state.open = true;
            state.loading = false;
        },
        [openProductModal.rejected]: (state, action) => {
            state.value = action.payload;
            state.open = true;
            state.loading = false;
        },
    },
});

export default modalProductSlice.reducer;
export const { closeProductModal } = modalProductSlice.actions;
