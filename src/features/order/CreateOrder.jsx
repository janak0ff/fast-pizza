import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

/**
 * Form to create a new order.
 *
 * The form contains fields for the customer's first name, phone number, and address.
 * Additionally, it contains a checkbox to indicate whether the order should be
 * given priority.
 *
 * The component uses useActionData to access the form error data returned by the
 * action function. If there is an error, it displays the error message next to the
 * relevant field.
 *
 * When the form is submitted, it sends a POST request to the /order/new action
 * function. The action function creates a new order and returns a redirect to the
 * /order/:orderId page.
 *
 * The component also uses useNavigation to determine if the form is currently
 * submitting. If it is, it disables the submit button and displays a message
 * indicating that the order is being placed.
 *
 * Finally, the component includes a hidden field containing the cart data as a
 * JSON string. This data is used by the action function to create the new order.
 */
function CreateOrder() {
  // useNavigation returns an object with the state of the navigation.
  // The state can be one of the following: "idle", "submitting", "loading".
  // We use the state to determine if the form is currently submitting.
  // If it is, we disable the submit button and display a message
  // indicating that the order is being placed.
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // useActionData returns the form error data returned by the action function
  // when the form is submitted. If there is an error, it displays the error
  // message next to the relevant field.
  const formError = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {/* if there is an error, display it here */}
          {formError?.phone && <p>{formError.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

/**
 * The action function for creating a new order.
 *
 * The function takes the request object as an argument and returns an object
 * with the following properties:
 *  - `error`: an object with the following properties:
 *    - `phone`: a string with the error message for the phone number field, if
 *      any.
 *
 * If the form is valid, the function creates a new order and returns a redirect
 * to the /order/:orderId page.
 */
export async function action({ request }) {
  // Get the form data from the request
  const formData = await request.formData();
  // Convert the form data to an object
  const data = Object.fromEntries(formData);
  // Log the data to the console for debugging
  // console.log(data);

  // Create a new order object with all the data from the form
  const order = {
    ...data,
    // convert the cart data from a string to an object
    cart: JSON.parse(data.cart),
    // if the priority checkbox is checked, set the priority property to true
    priority: data.priority === "on",
  };
  // Log the order object to the console for debugging
  console.log(order);

  // Create an error object to store any errors
  const error = {};
  // Check if the phone number is valid
  if (!isValidPhone(order.phone)) {
    // if it's not valid, add an error message to the error object
    error.phone = "Phone number is not valid";
  }

  // if there are any errors, return the error object
  if (Object.keys(error).length > 0) return error;

  // if no error, create the order
  const newOrder = await createOrder(order);

  // Redirect to the order confirmation page using the newly created order's id
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
