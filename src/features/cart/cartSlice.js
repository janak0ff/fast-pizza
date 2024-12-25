// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the cart slice
const initialState = {
  // cart: [
  //   {
  //     pizzaId: "heomepizza",
  //     name: "Mediterranean",
  //     quantity: 5,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
  cart: [],
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
      if (item.quantity === 0)  cartSlice.caseReducers.deleteItem(state, action);
        //OR {state.cart = state.cart.filter((item) => item.pizzaId !== action.payload,);}
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

// use 'reselect' for big application
// Selector function that returns the entire cart array from the Redux state
export const getCart = (state) => state.cart.cart;

// Selector function that calculates the total quantity of all items in the cart
// Uses reduce to sum up the quantity property of each cart item, starting from 0
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// Selector function that calculates the total price of all items in the cart
// Uses reduce to sum up the totalPrice property of each cart item, starting from 0
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

/* The getCurrentQuantityById function takes a pizza ID (id) as an argument and returns another function. This outer function is a selector function that accepts the Redux state as an argument.
Inside the selector function, it uses the find method to find the item in the cart with a matching pizzaId. The find method returns the first item that satisfies the provided testing function.
The ?. operator is used to safely access the quantity property of the found item. If the item is null or undefined, the ?. operator will return undefined.
The ?? operator is used as a fallback value. If the quantity property is undefined (due to the ?. operator), the ?? operator will return 0.
Finally, the selector function returns the current quantity of the pizza item with the specified ID, or 0 if no matching item is found.*/

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

/* The find method is a built-in JavaScript method that is used to find the first element in an array that satisfies a provided testing function. It iterates over each element in the array and executes the testing function on each element until it finds one that returns a truthy value. Once it finds a matching element, it immediately returns that element. If no matching element is found, it returns undefined.

const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((number) => number > 3);
console.log(foundNumber); // Output: 4 */
