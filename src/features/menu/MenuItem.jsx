import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";
/**
 * A single menu item, with a picture, name, ingredients, price, and "Add to cart" button.
 * If the item is sold out, the image is greyed out and the price is replaced with a
 * "Sold out" message.
 *
 * @param {Object} pizza - an object with `id`, `name`, `unitPrice`, `ingredients`,
 *   `soldOut`, and `imageUrl` properties.
 * @returns {JSX.Element} A JSX element representing a single menu item.
 */
function MenuItem({ pizza }) {
  const dispach = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    // console.log(`Added pizza ${name} to cart`);
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispach(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut && (
            <Button onClick={handleAddToCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
