// URL to the API
const API_URL = "https://react-fast-pizza-api.jonas.io/api";

// Async function to get the menu from the API
export async function getMenu() {
  // Fetch the menu from the API
  const res = await fetch(`${API_URL}/menu`);

  // Check if the response is OK
  // If it's not OK, throw an error
  if (!res.ok) throw Error("Failed getting menu");

  // Get the JSON data from the response
  const { data } = await res.json();
  // Return the data
  return data;
}

// Async function to get an order from the API
export async function getOrder(id) {
  // Fetch the order from the API using the provided order ID
  const res = await fetch(`${API_URL}/order/${id}`);

  // Check if the response is OK
  // If it's not OK, throw an error
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  // Get the JSON data from the response
  const { data } = await res.json();
  // Return the data
  return data;
}

// Async function to create a new order
export async function createOrder(order) {
  // Send a POST request to the API to create a new order
  const res = await fetch(`${API_URL}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  // Check if the response is OK
  // If it's not OK, throw an error
  if (!res.ok) throw Error("Failed creating order");

  // Get the JSON data from the response
  const { data } = await res.json();
  // Return the data
  return data;
}

// Async function to update an existing order
export async function updateOrder(id, updates) {
  // Send a PATCH request to the API to update the order with the provided ID
  const res = await fetch(`${API_URL}/order/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  // Check if the response is OK
  // If it's not OK, throw an error
  if (!res.ok) throw Error("Failed updating your order");

  // We don't need the data, so we don't return anything
}
