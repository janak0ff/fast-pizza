import { formatCurrency } from "../../utils/helpers";

// OrderItem component to display a single item in the order
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  // Destructure properties from the item object
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        {/* Display the quantity and name of the item */}
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        {/* Display the total price of the item */}
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      {/* Display the ingredients of the item or a loading message */}
      <p className="text-xs capitalize italic text-stone-500">
        {isLoadingIngredients ? "loading.." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
