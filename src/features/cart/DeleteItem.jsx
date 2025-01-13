// Import the useDispatch hook from react-redux to dispatch actions to the Redux store
import { useDispatch } from "react-redux";
// Import the Button component for styled buttons
import Button from "../../ui/Button";
// Import the deleteItem action from the cartSlice
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  // Initialize dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  return (
    // Render a small button that dispatches the deleteItem action with the pizzaId when clicked
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
