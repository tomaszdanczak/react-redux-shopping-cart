import { useSelector } from "react-redux";
import Button from "../atoms/Button";
import { formatCurrency } from "../../utils";

export default function ProceedOrder() {
  const cartItems = useSelector((state) => state.cartState);

  return (
    <div className="flex justify-between mt-8">
      <p className="text-lg">
        <span className="mr-2">Total:</span>
        <span className="text-xl font-semibold">
          {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
        </span>
      </p>

      <Button
        text="Proceed"
        customStyle="w-6/12 tracking-wider bg-yellow-300 border border-gray-900 hover:bg-yellow-400 active:bg-yellow-200"
      />
    </div>
  );
}
