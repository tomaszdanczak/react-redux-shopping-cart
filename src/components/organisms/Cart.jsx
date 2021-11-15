import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import ProceedOrder from "../molecules/ProceedOrder";
import CheckoutForm from "./CheckoutForm";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartState);
  const { isOrderFormOpen } = useSelector((state) => state.orderState);

  const renderCart = () => {
    if (cartItems.length === 0) {
      return;
    } else {
      return (
        <>
          <CartItems />
          <ProceedOrder />
          {isOrderFormOpen && <CheckoutForm />}
        </>
      );
    }
  };

  return (
    <div className="col-span-2 ml-4 mr-4">
      <p className="mb-4 pb-4 border-b border-gray-500">{`You have ${cartItems.length} in the cart.`}</p>
      {renderCart()}
    </div>
  );
}
