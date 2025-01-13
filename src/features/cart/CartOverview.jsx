// Import useSelector hook from react-redux to access the Redux store state
import { useSelector } from "react-redux";
// Import Link component from react-router-dom for navigation
import { Link } from "react-router-dom";
// Import selectors to get total cart price and quantity from the cartSlice
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
// Import formatCurrency function to format prices
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  // Get the total quantity of items in the cart from the Redux store
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  // Get the total price of items in the cart from the Redux store
  const totalCartPrice = useSelector(getTotalCartPrice);

  // If the cart is empty, return null (do not render anything)
  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
