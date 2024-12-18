// Import components from other files.
import Header from "./Header";
import Loader from "./Loader";
// Import a component from another feature.
import CartOverview from "../features/cart/CartOverview";
// Import hooks from react-router-dom.
import { Outlet, useNavigation } from "react-router-dom";

// Define the AppLayout component.
function AppLayout() {
  // Use the useNavigation hook to get the navigation object.
  const navigation = useNavigation();
  // Create a variable to check if the navigation is loading.
  const isLoading = navigation.state === "loading";

  // Return JSX for the AppLayout component.
  return (
    // Create a grid container with three rows.
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {/* // If the navigation is loading, render the Loader component. */}
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* // Render the Outlet component which will render the current route. */}
          <Outlet />
        </main>
      </div>

      {/* // Render the CartOverview component. */}
      <CartOverview />
    </div>
  );
}

// Export the AppLayout component.
export default AppLayout;
