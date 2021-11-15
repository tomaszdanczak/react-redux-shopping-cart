import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils";
import Button from "../atoms/Button";
import { addToCart } from "../../redux/actions/cartActions";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <li className="h-full">
      <div className="flex flex-col h-full justify-between">
        <a className="flex-grow" href="/">
          <img
            className="border translate border-transparent hover:border-gray-900 "
            src={product.image}
            alt={product.title}
          />
          <p className="mt-4">{product.title}</p>
        </a>

        <div className="flex justify-between mt-6">
          <div className="text-3xl flex-grow flex justify-center items-center">
            <p>{formatCurrency(product.price)}</p>
          </div>
          <Button
            onClick={handleAddToCart}
            text="Add To Cart"
            customStyle="flex-grow border font-semibold tracking-wider text-gray-900 text-lg border-gray-900 bg-transparent transform transition hover:bg-yellow-300 hover:-translate-y-px active:bg-yellow-400 active:translate-y-0 lg:text-sm"
          />
        </div>
      </div>
    </li>
  );
}
