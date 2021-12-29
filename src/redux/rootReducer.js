import { combineReducers } from "redux";
import menuSlice from "./slices/menuSlice";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlices";
import modalProductSlice from "./slices/modalProductSlice";
import modalCartSlice from "./slices/modalCartSlice";
import shopSlice from "./slices/shopSlice";
import checkoutSlice from "./slices/checkoutSlice";

// 2. Redux guide: Assign reducer
export default combineReducers({
    menuSlice: menuSlice,
    userSlice: userSlice,
    cartSlice: cartSlice,
    modalProductSlice: modalProductSlice,
    modalCartSlice: modalCartSlice,
    shopSlice: shopSlice,
    checkoutSlice: checkoutSlice,
});
