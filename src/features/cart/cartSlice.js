// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the cart slice
const initialState = {
  // The cart is initially an empty array
  cart: [],
};

// Create a slice for cart-related state and actions
const cartSlice = createSlice({
  // Name the slice "cart"
  name: "cart",
  // Set the initial state for the slice
  initialState: initialState,
  // Define the reducers for the slice
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
      // Find the item in the cart by its pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      // If the item exists, increase its quantity by 1
      if (item) {
        item.quantity += 1;
        // Update the total price of the item
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    // Reducer to decrease the quantity of an item in the cart
    decreaseItemQuantity: (state, action) => {
      // Find the item in the cart by its pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      // If the item exists and its quantity is greater than 1, decrease its quantity by 1
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        // Update the total price of the item
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    // Reducer to clear all items from the cart
    clearCart: (state) => {
      // Set the cart to an empty array
      state.cart = [];
    },
  },
});

// Export the actions generated by createSlice
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;

// Selector to get the cart items from the state
export const getCart = (state) => state.cart.cart;

// Selector to get the total quantity of items in the cart
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

// Selector to get the total price of items in the cart
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);

// Selector to get the current quantity of an item by its pizzaId
export const getCurrentQuantityById = (pizzaId) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === pizzaId)?.quantity || 0;
