// This function takes an object with latitude and longitude properties
// and returns a promise that resolves with the address for that position.
export async function getAddress({ latitude, longitude }) {
  // Make a GET request to the API with the latitude and longitude
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );

  // Check if the response was successful. If it wasn't, throw an error.
  if (!res.ok) throw Error("Failed getting address");

  // Convert the response to JSON and wait for it to resolve.
  const data = await res.json();

  // Return the address data.
  return data;
}
