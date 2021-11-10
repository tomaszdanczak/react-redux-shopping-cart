import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 px-4 text-white flex justify-between items-center p-3">
      <Link className="hover:text-yellow-400 " to="/">
        React Shopping Cart
      </Link>
      <Link className="hover:text-yellow-400 mr-4" to="/admin">
        Admin
      </Link>
    </header>
  );
}
