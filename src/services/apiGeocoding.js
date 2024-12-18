// This function takes an object with latitude and longitude properties
// and returns a promise that resolves with the address for that position.
export async function getAddress({ latitude, longitude }) {
  // We make a GET request to the API with the latitude and longitude
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );
  // We check if the response was successful. If it wasn't, we throw an error.
  if (!res.ok) throw Error("Failed getting address");
  // We convert the response to JSON and wait for it to resolve.
  const data = await res.json();
  // We return the address data.
  return data;
}
