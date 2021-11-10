import FilterSection from "../molecules/FilterSection";
import Product from "../molecules/Product";
import { products } from "./../../data.json";

export default function Products() {
  return (
    <div className="col-span-5 ml-4">
      <FilterSection />
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </ul>
    </div>
  );
}
