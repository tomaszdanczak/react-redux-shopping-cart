import CartItem from "../molecules/CartItem";
import { cartItems } from "./../../data.json";

export default function CartItems() {
  return (
    <div className="overflow-hidden">
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem._id} cartItem={cartItem} />;
      })}
    </div>
  );
}
