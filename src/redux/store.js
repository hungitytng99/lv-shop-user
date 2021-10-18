import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "src/redux/rootReducer"
import thunk from "redux-thunk"

const middleware = [thunk]

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middleware),
    devTools: process.env.NODE_ENV !== "production",
})
