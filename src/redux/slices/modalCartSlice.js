import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open: false,
    loading: false,
}

export const modalCartSlice = createSlice({
    name: "modal_cart",
    initialState: initialState,
    reducers: {
        openCartModal: (state, action) => {
            state.loading = false
            state.open = true
        },
        closeCartModal: (state, action) => {
            state.loading = false
            state.open = false
        },
    },
})

export default modalCartSlice.reducer
export const { closeCartModal, openCartModal } = modalCartSlice.actions
