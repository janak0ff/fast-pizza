// Import the useLoaderData hook from react-router-dom to access the data loaded by the loader function
import { useLoaderData } from "react-router-dom";
// Import the getMenu function to fetch the menu data from the API
import { getMenu } from "../../services/apiRestaurant";
// Import the MenuItem component to display individual menu items
import MenuItem from "./MenuItem";

function Menu() {
  // Fetch and display menu data using the loader function
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        // Render a MenuItem component for each pizza in the menu
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// This function is a "loader" function that's used by React Router to
// fetch data before rendering the component.
export async function loader() {
  // Fetch the menu data using the getMenu function from the API
  const menu = await getMenu();

  // Return the menu data. The useLoaderData hook will receive this data
  // and make it available to the Menu component.
  return menu;
}

export default Menu;
