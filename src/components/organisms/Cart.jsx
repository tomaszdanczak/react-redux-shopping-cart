import CartItems from "./CartItems";
import { cartItems } from "./../../data.json";
import ProceedOrder from "../molecules/ProceedOrder";

export default function Cart() {
  return (
    <div className="col-span-2 ml-4 mr-4">
      <p className="mb-4 pb-4 border-b border-gray-500">{`You have ${cartItems.length} in the cart.`}</p>
      <CartItems />
      <ProceedOrder />
    </div>
  );
}
