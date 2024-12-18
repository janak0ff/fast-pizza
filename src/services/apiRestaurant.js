// URL to the API
const API_URL = "https://react-fast-pizza-api.jonas.io/api";

// async function to get the menu from the API
export async function getMenu() {
  // fetch the menu from the API
  const res = await fetch(`${API_URL}/menu`);

  // Check if the response is OK
  // If it's not OK, throw an error
  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  // Get the JSON data from the response
  const { data } = await res.json();
  // Return the data
  return data;
}

// async function to get an order from the API
export async function getOrder(id) {
  // fetch the order from the API
  const res = await fetch(`${API_URL}/order/${id}`);

  // Check if the response is OK
  // If it's not OK, throw an error
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  // Get the JSON data from the response
  const { data } = await res.json();
  // Return the data
  return data;
}

// async function to create an order on the API
export async function createOrder(newOrder) {
  try {
    // Post the new order to the API
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response is OK
    // If it's not OK, throw an error
    if (!res.ok) throw Error();
    // Get the JSON data from the response
    const { data } = await res.json();
    // Return the data
    return data;
  } catch {
    // If there is an error, throw an error
    throw Error("Failed creating your order");
  }
}

// async function to update an order on the API
export async function updateOrder(id, updateObj) {
  try {
    // Patch the order on the API
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response is OK
    // If it's not OK, throw an error
    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    // If there is an error, throw an error
    throw Error("Failed updating your order");
  }
}
