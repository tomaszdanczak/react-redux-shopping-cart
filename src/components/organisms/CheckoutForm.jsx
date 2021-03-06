import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../atoms/Button";
import FormControl from "../molecules/FormControl";
import {
  createOrder,
  hideOrderForm,
  showOrderDetail,
} from "../../redux/actions/orderActions";
import { clearCart } from "../../redux/actions/cartActions";

export default function CheckoutForm() {
  const [form, setForm] = useState({ email: "", name: "", address: "" });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartState);

  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      ...form,
      cartItems,
      total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };

    dispatch(createOrder(order));
    dispatch(clearCart());
    dispatch(hideOrderForm());
    dispatch(showOrderDetail());
  };

  return (
    <div className="border-t border-gray-400 mt-14 pt-4 relative overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="relative w-full h-full animate-fade-in"
      >
        <FormControl
          value={form.email}
          onChangeInput={handleChangeInput}
          name="email"
          type="email"
        />
        <FormControl
          value={form.name}
          onChangeInput={handleChangeInput}
          name="name"
          type="text"
        />
        <FormControl
          value={form.address}
          onChangeInput={handleChangeInput}
          name="address"
          type="text"
        />
        <Button
          text="Checkout"
          customStyle="w-full py-2 tracking-widest bg-yellow-300 border border-gray-900 hover:bg-yellow-400 active:bg-yellow-200"
          type="submit"
        />
      </form>
    </div>
  );
}
