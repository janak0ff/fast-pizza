import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

// Function to get the user's current geographical position
function getPosition() {
  // Return a new promise that resolves with the user's current geographical position
  return new Promise(function (resolve, reject) {
    // Use the browser's geolocation API to get the current position
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Create an asynchronous thunk action to fetch the user's address
export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // Call getPosition to get the current geographical position of the user
  const positionObj = await getPosition();
  // Extract latitude and longitude from the position object
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // Use a reverse geocoding API to convert the position into a human-readable address
  const addressObj = await getAddress(position);
  // Format the address components into a single string
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // Return an object containing both the geographical position and the formatted address
  return { position, address };
});

// Define the initial state of the user slice
const initialState = {
  // The user's address is initially null
  address: null,
  // The user's geographical position is initially null
  position: null,
  // The loading state for fetching the address
  loading: false,
  // Any error that occurs while fetching the address
  error: null,
};

// Create a slice for user-related state and actions
const userSlice = createSlice({
  // Name the slice "user"
  name: "user",
  // Set the initial state for the slice
  initialState: initialState,
  // Define the reducers for the slice
  reducers: {},
  // Define extra reducers for handling asynchronous actions
  extraReducers: (builder) => {
    builder
      // Handle the pending state of the fetchAddress action
      .addCase(fetchAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle the fulfilled state of the fetchAddress action
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload.address;
        state.position = action.payload.position;
      })
      // Handle the rejected state of the fetchAddress action
      .addCase(fetchAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer to be used in the store
export default userSlice.reducer;
