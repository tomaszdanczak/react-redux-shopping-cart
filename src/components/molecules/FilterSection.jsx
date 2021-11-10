import SelectFilter from "../atoms/SelectFilter";
import SelectOrder from "../atoms/SelectOrder";
import { products } from "./../../data.json";

export default function FilterSection() {
  const count = products.length;

  return (
    <div className="mb-4 pb-4 border-b border-gray-500 flex justify-between">
      <p>{count} Products</p>
      <SelectOrder />
      <SelectFilter />
    </div>
  );
}
