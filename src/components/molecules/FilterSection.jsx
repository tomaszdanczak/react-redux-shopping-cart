import { useSelector } from "react-redux";
import SelectFilter from "../atoms/SelectFilter";
import SelectOrder from "../atoms/SelectOrder";

export default function FilterSection() {
  const { products } = useSelector((state) => state.productsState);
  const count = products.length;

  return (
    <div className="mb-4 pb-4 border-b border-gray-500 flex justify-between">
      <p>{count} Products</p>
      <SelectOrder />
      <SelectFilter />
    </div>
  );
}
