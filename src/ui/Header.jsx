import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/cart/Username";

function Header() {
  return (
    <header className="bg-yellow-500 tracking-widest">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
