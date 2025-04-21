// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../cart/slicecart"

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cart/slicecart";
import currentProductReducer from "../reducers/currentProductReducer" // adjust path

const store = configureStore({
  reducer: {
    cart: cartReducer,
    currentProduct: currentProductReducer,
  },
});

export default store;
