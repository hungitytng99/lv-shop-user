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
    const response = await cartService.getUserCart();
    // console.log(response);
    return response;
});
export const updateProductCart = createAsyncThunk("cart/update_cart", async ({ idCartItem, params }, thunkAPI) => {
    const response = await cartService.updateProductInCart(idCartItem, params);
    return response;
});

export const addProductToCart = createAsyncThunk("cart/add_product", async (params, thunkAPI) => {
    const response = await cartService.addProductToCart(params);
    return response;
});
export const deleteCartItem = createAsyncThunk("cart/delete_cart_item", async (idCartItem, thunkAPI) => {
    const response = await cartService.deleteCartItem(idCartItem);
    return response;
});

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
        // ---------------------------------------------------------------------------
        [updateProductCart.pending]: (state, action) => {
            state.loading = true;
        },
        [updateProductCart.fulfilled]: (state, action) => {
            state.value = action.payload;
            state.loading = false;
        },
        [updateProductCart.rejected]: (state, action) => {
            state.loading = false;
        },
        // ---------------------------------------------------------------------------
        [deleteCartItem.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteCartItem.fulfilled]: (state, action) => {
            state.value = action.payload;
            state.loading = false;
        },
        [deleteCartItem.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default cartSlice.reducer;
export const { clearCartData } = cartSlice.actions;
