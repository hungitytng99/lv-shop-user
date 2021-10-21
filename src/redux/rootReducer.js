import { combineReducers } from "redux"
import homeSlices from "./slices/homeSlices"
import menuSlice from "./slices/menuSlice"

// 2. Redux guide: Assign reducer
export default combineReducers({
    homepage: homeSlices,
    menuSlice: menuSlice,
})
