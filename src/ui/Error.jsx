// Import useRouteError hook from react-router-dom to handle route errors
import { useRouteError } from "react-router-dom";
// Import LinkButton component for navigation
import LinkButton from "./LinkButton";

// Define the Error component
function Error() {
  // Retrieve the error object using useRouteError hook
  const error = useRouteError();
  // Log the error to the console for debugging
  console.log(error);

  // Return the JSX to render the error message and a back button
  return (
    <div>
      {/* Display a message indicating something went wrong */}
      <h1>Something went wrong 😢</h1>
      {/* Display the error data or message */}
      <p>{error.data || error.message}</p>

      {/* Render a LinkButton to navigate back to the previous page */}
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

// Export the Error component as default
export default Error;
