function getPosition() {
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
