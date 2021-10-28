import { combineReducers } from "redux"
import menuSlice from "./slices/menuSlice"
import userSlice from "./slices/userSlice"
import cartSlice from "./slices/cartSlices"

// 2. Redux guide: Assign reducer
export default combineReducers({
    menuSlice: menuSlice,
    userSlice: userSlice,
    cartSlice: cartSlice,
})
