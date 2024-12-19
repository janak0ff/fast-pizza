// Import the useSelector hook from Redux to access the store state
import { useSelector } from "react-redux";
// Import the CreateUser component for new user registration
import CreateUser from "../features/user/CreateUser";
// Import the Button component for navigation
import Button from "./Button";

function Home() {
  // Get the username from Redux store using useSelector
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-12 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold sm:uppercase">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {/* Conditional rendering based on username */}
      {username === "" ? (
        // If no username, show CreateUser component
        <CreateUser />
      ) : (
        // If username exists, show Button component with personalized message
        <Button to="/menu" type="primary">
          Start ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
