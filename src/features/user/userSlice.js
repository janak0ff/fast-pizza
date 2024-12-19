import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the user slice
const initialState = {
  username: "", // Initially, the userName is an empty string
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
});

// Export the updateName action creator
export const { updateName } = userSlice.actions;

// Export the reducer function to be used in the store
export default userSlice.reducer;

/*function getPosition() {
  // Return a new promise that resolves with the user's current geographical position
  return new Promise(function (resolve, reject) {
    // Use the browser's geolocation API to get the current position
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
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
}
*/
