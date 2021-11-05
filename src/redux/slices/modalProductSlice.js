import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { chiTietSanPham } from "src/constants/dataTest"

const initialState = {
    open: false,
    product: {},
    loading: false,
}

export const openProductModal = createAsyncThunk("modal_product/open_modal", async (productId, thunkAPI) => {
    // call api
    return chiTietSanPham
})

export const modalProductSlice = createSlice({
    name: "modal_product",
    initialState: initialState,
    reducers: {
        closeProductModal: (state, action) => {
            state.product = {}
            state.loading = false
            state.open = false
        },
    },
    extraReducers: {
        [openProductModal.pending]: (state, action) => {
            state.loading = true
            state.open = true
        },
        [openProductModal.fulfilled]: (state, action) => {
            state.product = action.payload
            state.open = true
            state.loading = false
        },
        [openProductModal.rejected]: (state, action) => {
            state.product = action.payload
            state.open = true
            state.loading = false
        },
    },
})

export default modalProductSlice.reducer
export const { closeProductModal } = modalProductSlice.actions
