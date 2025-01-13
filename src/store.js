// Import the configureStore function from the @reduxjs/toolkit package
// This function helps set up a Redux store with good defaults
import { configureStore } from "@reduxjs/toolkit";

// Import the userReducer from the userSlice.js file
// This reducer will manage the state related to the user
import userReducer from "./features/user/userSlice";

// Import the cartReducer from the cartSlice.js file
// This reducer will manage the state related to the shopping cart
import cartReducer from "./features/cart/cartSlice";

// Create a Redux store using the configureStore function
// The store holds the complete state tree of the application
const store = configureStore({
  // Define the reducers that will be used in the store
  // Each reducer is responsible for updating a specific part of the state
  reducer: {
    // The user state will be managed by userReducer
    user: userReducer,
    // The cart state will be managed by cartReducer
    cart: cartReducer,
  },
});

// Export the store as the default export of the module
// This allows other parts of the application to access the store
export default store;
