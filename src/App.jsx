// Import necessary components and functions from react-router-dom
// RouterProvider: Provides routing context to the application
// createBrowserRouter: Creates a router instance for handling browser-based routing
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import application components
// Home: Component for the home page
// Error: Component for displaying error messages
// Menu: Component for the menu page, with a loader function to fetch menu data
// Cart: Component for the shopping cart
// CreateOrder: Component for creating a new order, with an action function to handle order creation
// Order: Component for displaying an order, with a loader function to fetch order data
// AppLayout: Component that defines the layout of the application
// updateOrderAction: Action function for updating an order
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import { action as updateOrderAction } from "./features/order/UpdateOrder";

// Create a router using createBrowserRouter function
// This router defines the routes and their corresponding components
const router = createBrowserRouter([
  {
    // Define the layout component for the routes
    // AppLayout will be the main layout for all routes
    element: <AppLayout />,
    // Define the error component for handling errors
    // Error component will be displayed if there is an error in any route
    errorElement: <Error />,
    // Define child routes
    children: [
      {
        // Route for the home page
        // When the user navigates to "/", the Home component will be displayed
        path: "/",
        element: <Home />,
      },
      {
        // Route for the menu page
        // When the user navigates to "/menu", the Menu component will be displayed
        // menuLoader function will be used to fetch menu data before displaying the component
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />, // Error handling for the menu route
      },
      {
        // Route for the cart page
        path: "/cart",
        element: <Cart />,
      },
      {
        // Route for creating a new order
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction, // Action function for handling order creation
      },
      {
        // Route for viewing a specific order
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader, // Loader function for fetching order data
        errorElement: <Error />, // Error handling for the order route
        action: updateOrderAction, // Action function for updating an order
      },
    ],
  },
]);

// Define the main App component
function App() {
  // Use RouterProvider to make the router available to the app
  return <RouterProvider router={router} />;
}

export default App;
