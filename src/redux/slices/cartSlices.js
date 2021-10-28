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
            totalPrice: 100,
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
        id: "1234",
        quantity: 1,
        urlImg: "https://bizweb.dktcdn.net/thumb/large/100/367/937/products/2-4d4650c2-dfd4-4467-bcb4-205c692552e1.jpg?v=1615519760717",
        title: "Cửa lưới chống muỗi loại to to to",
        price: 100000,
    }

    if (localStorage.getItem(storageKey.TOKEN) == null) {
        let productList = [...cartSlice.value.products]
        const length = productList.length
        // console.log(productList)
        let kt = false
        let totalProducts = 0
        let totalPrice = 0
        for (let i = 0; i < length; i++) {
            if (productList[i].id === sp.id) {
                productList[i] = {
                    ...productList[i],
                    quantity: productList[i].quantity + sp.quantity,
                }
                kt = true
                // console.log("tìm thấy sản phẩm trong cart")
            }
            totalProducts += productList[i].quantity
            totalPrice += productList[i].quantity * productList[i].price
        }
        if (kt === false) {
            productList = [...productList, sp]
        }

        const result = {
            products: productList,
            totalProduct: totalProducts,
            totalPrice: totalPrice,
        }
        localStorage.setItem(storageKey.CART, JSON.stringify(result))
        return result
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
        [getProductCart.rejected]: (state, action) => {
            state.loading = false
            console.log("getProductCart lỗi")
        },
        //---------------------------------------------------------------------
        [addProductToCart.pending]: (state, action) => {
            state.loading = true
        },
        [addProductToCart.fulfilled]: (state, action) => {
            state.value = action.payload
            state.loading = false
        },
        [addProductToCart.rejected]: (state, action) => {
            state.loading = false
            console.log("lỗi add product to cart")
        },
    },
})

export default cartSlice.reducer
export const { clearCartData } = cartSlice.actions
