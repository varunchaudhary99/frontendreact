import { combineReducers } from "@reduxjs/toolkit";
import userReducer  from "../reducers/userReducer";
import  wishListReducer  from "../reducers/wishListReducer";
import  cartReducer  from "./cartReducer";
import  currentProductReducer  from  "../reducers/currentProductReducer";

const rootReducer = combineReducers({
    user:userReducer,
    wishlist:wishListReducer,
    cart:cartReducer,
    currentProduct:currentProductReducer
})
export default rootReducer