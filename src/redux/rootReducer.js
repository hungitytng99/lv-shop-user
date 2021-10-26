import { combineReducers } from "redux"
import homeSlices from "./slices/homeSlices"
import menuSlice from "./slices/menuSlice"
import userSlice from "./slices/userSlice"

// 2. Redux guide: Assign reducer
export default combineReducers({
    menuSlice: menuSlice,
    userSlice: userSlice,
})
