// Import the LinkButton component for styled navigation buttons
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      {/* Render a button that navigates back to the menu */}
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      {/* Display a message indicating that the cart is empty */}
      <p className="mt-7 text-lg font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
