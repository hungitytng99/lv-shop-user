import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { storageKey } from "./../../constants/storageKeys"
const initialState = {
    value: {
        totalProduct: 0,
        totalPrice: 0,
        products: [],
    },
    loading: false,
}

export const getProductCart = createAsyncThunk("cart/get_product_cart", async () => {
    if (localStorage.getItem(storageKey.TOKEN)) {
        //call api
        return {
            totalProduct: 10,
            products: [],
        }
    } else {
        return JSON.parse(localStorage.getItem(storageKey.CART)) || initialState.value
    }
})

export const addProductToCart = createAsyncThunk("cart/add_product", async (idProduct, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const { cartSlice } = getState()
    //call api lấy sản phẩm
    const sp = {
        id: "123",
        quantity: 5,
        urlImg: "https://bizweb.dktcdn.net/thumb/large/100/367/937/products/2-4d4650c2-dfd4-4467-bcb4-205c692552e1.jpg?v=1615519760717",
        title: "Cửa lưới chống muỗi loại to to to",
        price: 100000,
    }

    if (localStorage.getItem(storageKey.TOKEN) == null) {
        let productList = cartSlice.value.products
        const length = productList.length
        console.log("tokeen nulll 1", productList)
        let kt = false
        for (let i = 0; i < length; i++) {
            if (productList[i].id === sp.id) {
                productList[i].quantity += sp.quantity
                kt = true
                break
            }
        }
        if (kt === false) productList.push(sp)
        console.log("tokeen nulll 2", productList)
        localStorage.setItem(storageKey.CART, JSON.stringify(cartSlice.value))
        return JSON.parse(localStorage.getItem(storageKey.CART))
    }
})

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        clearCartData: (state, action) => {
            state.value = initialState
        },
    },
    extraReducers: {
        [getProductCart.pending]: (state, action) => {
            state.loading = true
        },
        [getProductCart.fulfilled]: (state, action) => {
            state.value = action.payload
            state.loading = false
        },

        [addProductToCart.pending]: (state, action) => {
            state.loading = true
        },
        [addProductToCart.fulfilled]: (state, action) => {
            state.value = action.payload
            state.loading = false
        },
    },
})

export default cartSlice.reducer
export const { clearCartData } = cartSlice.actions
