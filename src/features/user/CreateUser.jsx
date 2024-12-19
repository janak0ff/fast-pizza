import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

// Component for creating a new user and handling user input
function CreateUser() {
  // State variable for storing username and function to update it
  const [username, setUsername] = useState("");
  // Get the dispatch function from Redux to send actions
  const dispatch = useDispatch();
  // Get the navigate function for programmatic routing
  const navigate = useNavigate();

  // Function that handles the form submission
  function handleSubmit(e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    // If username is empty, exit the function early
    if (!username) return;

    // Dispatch action to update username in Redux store
    dispatch(updateName(username));
    // Navigate to the menu page after successful submission
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
