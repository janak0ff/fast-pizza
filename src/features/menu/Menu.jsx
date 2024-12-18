import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // Fetch and display menu data using the loader function
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  // This function is a "loader" function that's used by React Router to
  // fetch data before rendering the component.
  // We're using the `getMenu` function from our services/apiRestaurant.js
  // file to fetch the menu data.
  const menu = await getMenu();

  // Now we just return the menu data. The `useLoaderData` hook will
  // receive this data and make it available to our component.
  return menu;
}

export default Menu;
