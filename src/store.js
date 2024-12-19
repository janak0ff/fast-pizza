// Import the configureStore function from the @reduxjs/toolkit package
import { configureStore } from "@reduxjs/toolkit";
// Import the userReducer from the userSlice.js file
import userReducer from "./features/user/userSlice";

// Create a store using the configureStore function
const store = configureStore({
  // Define the reducer function for the user feature
  reducer: {
    // The user feature reducer
    user: userReducer,
  },
});

// Export the store as the default export of the module
export default store;
