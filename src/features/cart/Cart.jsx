// Import Link component from react-router-dom for navigation
import { Link } from "react-router-dom";
// Import custom LinkButton component for styled navigation buttons
import LinkButton from "../../ui/LinkButton";
// Import custom Button component for styled buttons
import Button from "../../ui/Button";
// Import CartItem component to display individual items in the cart
import CartItem from "./CartItem";
// Import useDispatch and useSelector hooks from react-redux for interacting with the Redux store
import { useDispatch, useSelector } from "react-redux";
// Import clearCart action and getCart selector from cartSlice
import { clearCart, getCart } from "./cartSlice";
// Import EmptyCart component to display when the cart is empty
import EmptyCart from "./EmptyCart";

function Cart() {
  // Initialize dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();
  // Get the username from the Redux store using useSelector
  const username = useSelector((state) => state.user.username);
  // Get the cart items from the Redux store using the getCart selector
  const cart = useSelector(getCart);

  // If the cart is empty, display the EmptyCart component
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          // Render a CartItem component for each item in the cart
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
