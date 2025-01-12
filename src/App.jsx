// Import necessary components and functions from react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import application components
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
const router = createBrowserRouter([
  {
    // Define the layout component for the routes
    element: <AppLayout />,
    // Define the error component for handling errors
    errorElement: <Error />,
    // Define child routes
    children: [
      {
        // Route for the home page
        path: "/",
        element: <Home />,
      },
      {
        // Route for the menu page
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // Loader function for fetching menu data
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
