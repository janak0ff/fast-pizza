// Import the configureStore function from the @reduxjs/toolkit package
import { configureStore } from "@reduxjs/toolkit";
// Import the userReducer from the userSlice.js file
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

// Create a store using the configureStore function
const store = configureStore({
  // Define the reducers that will be used in the store
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

// Export the store as the default export of the module
export default store;
