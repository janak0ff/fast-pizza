// Import DeleteItem component for deleting an item from the cart
import DeleteItem from "./DeleteItem";
// Import formatCurrency function to format prices
import { formatCurrency } from "../../utils/helpers";
// Import UpdateItemQuantity component for updating the quantity of an item
import UpdateItemQuantity from "./UpdateItemQuantity";
// Import getCurrentQuantityById selector to get the current quantity of an item by its ID
import { getCurrentQuantityById } from "./cartSlice";
// Import useSelector hook from react-redux to access the Redux store state
import { useSelector } from "react-redux";

function CartItem({ item }) {
  // Destructure item properties for easier access
  const { pizzaId, name, quantity, totalPrice } = item;

  // Get the current quantity of the item from the Redux store
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
