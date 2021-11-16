import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchProducts } from "../../redux/actions/productsActions";
import FilterSection from "../molecules/FilterSection";
import Product from "../molecules/Product";

export default function Products() {
  const dispatch = useDispatch();
  const { filtredProducts } = useSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(featchProducts());
  }, [dispatch]);

  const renderProducts = () => {
    if (filtredProducts === -1) {
      return <h2>Loading...</h2>;
    }

    if (filtredProducts.length === 0) {
      return <h2>{`There are no products`}</h2>;
    }

    return (
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3">
        {filtredProducts.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </ul>
    );
  };

  return (
    <div className="col-span-5 ml-4">
      <FilterSection />
      {renderProducts()}
    </div>
  );
}
