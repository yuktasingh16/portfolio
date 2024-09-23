import { configureStore } from "@reduxjs/toolkit";
import { WishListSlice } from "./WishListSlice";

export const store = configureStore({
    reducer:{
        cart: WishListSlice.reducer,
    }
});