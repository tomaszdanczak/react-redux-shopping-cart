import Cart from "../organisms/Cart";
import Products from "../organisms/Products";

export default function HomePage() {
  return (
    <div className="grid grid-cols-7 gap-4 my-6">
      <Products />
      <Cart />
    </div>
  );
}
