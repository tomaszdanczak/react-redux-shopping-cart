import { useSelector } from "react-redux";
import CartItem from "../molecules/CartItem";

export default function CartItems() {
  const cartItems = useSelector((state) => state.cartState);

  return (
    <div className="overflow-hidden">
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem._id} cartItem={cartItem} />;
      })}
    </div>
  );
}
