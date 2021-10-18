import { combineReducers } from "redux"
import homeSlices from "pages/homeSlices"

// 2. Redux guide: Assign reducer
export default combineReducers({
    homepage: homeSlices,
})
