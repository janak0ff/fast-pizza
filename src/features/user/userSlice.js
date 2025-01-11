import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  // Return a new promise that resolves with the user's current geographical position
  return new Promise(function (resolve, reject) {
    // Use the browser's geolocation API to get the current position
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

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
  username: "", // Initially, the userName is an empty string
  status: "idle", // Initially, the status is set to "idle"
  position: {},
  address: "",
  Error: "",
};

// Create a slice for user-related state and actions
const userSlice = createSlice({
  // Set the initial state for the slice
  initialState,
  // Name the slice "user"
  name: "user",
  // Define the reducers for the slice
  reducers: {
    // Reducer to update the userName in the state
    updateName(state, action) {
      // Set the userName to the value from the action payload
      state.username = action.payload;
    },
  },
  // Define extra reducers for handling the fetchAddress async thunk
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        // Set the status to "succeeded" and update the position and address in the state
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.state = 'idle'; // Reset the status to "idle" after fetching the address
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        // Set the status to "failed" and save the error message in the state
        state.status = "failed";
        state.error = action.error.message;
      }),
});

// Export the updateName action creator
export const { updateName } = userSlice.actions;

// Export the reducer function to be used in the store
export default userSlice.reducer;
