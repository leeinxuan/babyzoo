import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import cartReducer from './cartSlice';

const store= configureStore({
    reducer:{
        counter:counterReducer,
        cart:cartReducer,
    },
    devTools:process.env.NODE_ENV!=='production',
});

export default store;