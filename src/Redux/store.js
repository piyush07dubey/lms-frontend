import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/Authslice";
const store=configureStore({
    reducer:{Auth:AuthSliceReducer},
    devTools:true,
});
export default store;