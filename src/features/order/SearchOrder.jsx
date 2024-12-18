import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  // Declare a state variable 'query' to store the search input, initialized to an empty string
  const [query, setQuery] = useState("");

  // Get the navigation function from 'react-router-dom' to programmatically navigate between routes
  const navigate = useNavigate();

  // Define the form submission handler function
  function handleSubmit(e) {
    // Prevent the default form submission behavior to handle it with JavaScript
    e.preventDefault();

    // If the query is empty, do nothing and return
    if (!query) return;

    // Navigate to the order details page using the order number from the query
    navigate(`/order/${query}`);

    // Clear the query input after navigation
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
