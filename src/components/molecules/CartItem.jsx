import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import { formatCurrency } from "../../utils";
import Button from "../atoms/Button";

export default function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem._id));
  };

  return (
    <li className="col-span-2 flex mb-4 pb-2 border-b relative animate-fade-in">
      <div className="w-14 flex-shrink-0">
        <img src={cartItem.image} alt={cartItem.title} />
      </div>
      <div className="pl-4 flex-grow">
        <p>{cartItem.title}</p>
        <div className="text-right p-2 pr-0">
          <span className="mr-2">
            {formatCurrency(cartItem.price)} x {cartItem.count}
          </span>
          <Button
            onClick={handleRemoveFromCart}
            text="Remove"
            customStyle="border px-2 tracking-wider text-gray-900 text-sm border-gray-900 bg-gray-200  transform transition hover:bg-gray-300  active:bg-gray-400 lg:text-sm"
          />
        </div>
      </div>
    </li>
  );
}
