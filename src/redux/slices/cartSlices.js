import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { storageKey } from "./../../constants/storageKeys";
import { cartService } from "./../../services/cart/index";
const initialState = {
    value: {
        totalProduct: 0,
        totalPrice: 0,
        products: [],
    },
    loading: false,
};

export const getProductCart = createAsyncThunk("cart/get_product_cart", async () => {
    //call api
    const response = await cartService.getUserCart();
    console.log(response);
    return response;
    // return {
    //     totalProduct: 10,
    //     totalPrice: 100,
    //     products: [],
    // };
});

export const addProductToCart = createAsyncThunk("cart/add_product", async (idProduct, thunkAPI) => {});

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        clearCartData: (state, action) => {
            state.value = initialState;
        },
    },
    extraReducers: {
        [getProductCart.pending]: (state, action) => {
            state.loading = true;
        },
        [getProductCart.fulfilled]: (state, action) => {
            state.value = action.payload;
            state.loading = false;
        },
        [getProductCart.rejected]: (state, action) => {
            state.loading = false;
        },
        //---------------------------------------------------------------------
        [addProductToCart.pending]: (state, action) => {
            state.loading = true;
        },
        [addProductToCart.fulfilled]: (state, action) => {
            state.value = action.payload;
            state.loading = false;
        },
        [addProductToCart.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default cartSlice.reducer;
export const { clearCartData } = cartSlice.actions;
