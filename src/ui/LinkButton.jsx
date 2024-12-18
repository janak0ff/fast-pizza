// Import the Link component and useNavigate hook from react-router-dom
import { Link, useNavigate } from "react-router-dom";

// Define a functional component named LinkButton
function LinkButton({ children, to }) {
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();
  // Define a constant className with CSS styles for the button or link
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  // Check if the destination is '-1' which indicates navigating back
  if (to === "-1")
    // Return a button element with an onClick handler for navigating back
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children} {/* Render any child elements inside the button */}
      </button>
    );

  // If the destination is not '-1', return a Link component
  return (
    <Link to={to} className={className}>
      {children} {/* Render any child elements inside the link */}
    </Link>
  );
}

export default LinkButton;
