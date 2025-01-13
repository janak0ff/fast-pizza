// Import the useDispatch hook from react-redux to dispatch actions to the Redux store
import { useDispatch } from "react-redux";
// Import the Button component for styled buttons
import Button from "../../ui/Button";
// Import actions to increase and decrease item quantity from the cartSlice
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  // Initialize dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      {/* Button to increase the quantity of the item */}
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      {/* Display the current quantity of the item */}
      <span className="text-sm font-medium">{currentQuantity}</span>
      {/* Button to decrease the quantity of the item */}
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
