import { useSelector } from "react-redux";

function Username() {
  // Get the username from the Redux store's state using the useSelector hook
  // state.user.username accesses the username property from the user slice of the state
  const username = useSelector((state) => state.user.username);
  // If no username exists (is null/undefined/empty), don't render anything and return null
  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
