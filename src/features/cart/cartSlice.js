// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the cart slice
const initialState = {
  cart: [
    {
      pizzaId: "heomepizza",
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

// Create a slice for cart-related state and actions
const cartSlice = createSlice({
  name: "cart", // Name the slice "cart"
  initialState: initialState, // Set the initial state for the slice
  reducers: {
    // Reducer to add a new item to the cart
    addItem: (state, action) => {
      // Add the new item from the action payload to the cart
      state.cart.push(action.payload);
    },
    // Reducer to delete an item from the cart
    deleteItem: (state, action) => {
      // Filter out the item with the specified pizzaId from the cart
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    // Reducer to increase the quantity of an item in the cart
    increaseItemQuantity: (state, action) => {
      // Find the item with the specified pizzaId in the cart
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      // Increment the quantity of the item
      item.quantity++;
      // Update the total price for the new quantity
      item.totalPrice = item.quantity * item.unitPrice;
    },
    // Reducer to decrease the quantity of an item in the cart
    decreaseItemQuantity: (state, action) => {
      // Find the item with the specified pizzaId in the cart
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      // Decrement the quantity of the item
      item.quantity--;
      // Update the total price for the new quantity
      item.totalPrice = item.quantity * item.unitPrice;
      // If the quantity reaches zero, remove the item from the cart
      if (item.quantity === 0) {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );
      }
    },
    // Reducer to clear all items from the cart
    clearCart: (state) => {
      // Set the cart to an empty array
      state.cart = [];
    },
  },
});

// Export the action creators for the reducers
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

// Export the reducer function to be used in the store
export default cartSlice.reducer;
