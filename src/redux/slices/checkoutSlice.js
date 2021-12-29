import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initValue = {
    value: {
        name: "",
        phone: "",
        address: {
            street: "",
            provinces: "-1",
            districts: "-1",
            wards: "-1",
        },
        shipfee: 0,
        paymentMethod: "COD",
    },
    loading: false,
};

export const checkoutSlice = createSlice({
    name: "checkout_info",
    initialState: initValue,
    reducers: {
        updateCheckoutInfo: (state, action) => {
            state.value = action.payload;
        },
        clearCheckoutInfo: (state, action) => {
            state.value = initValue.value;
        },
    },
});

export default checkoutSlice.reducer;
export const { updateCheckoutInfo, clearCheckoutInfo } = checkoutSlice.actions;
