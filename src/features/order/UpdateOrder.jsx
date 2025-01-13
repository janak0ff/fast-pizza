import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  // Initialize fetcher to handle form submission
  const fetcher = useFetcher();

  return (
    // Create a form to update the order using the fetcher
    <fetcher.Form method="PATCH" className="text-right">
      {/* Button to make the order a priority */}
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// Action function to handle the form submission
export async function action({ request, params }) {
  // Data to update the order with priority set to true
  const data = { priority: true };
  // Call the updateOrder function to update the order with the given orderId
  await updateOrder(params.orderId, data);
  // Return null as no further action is needed
  return null;
}
