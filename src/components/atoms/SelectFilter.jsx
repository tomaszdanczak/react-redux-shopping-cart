import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../redux/actions/productsActions";

export default function SelectFilter() {
  const value = useSelector((state) => state.productsState.size);

  const dispatch = useDispatch();

  const handleChangeValue = (e) => {
    dispatch(filterProducts(e.target.value));
  };

  return (
    <p>
      Filter
      <select value={value} onChange={handleChangeValue}>
        <option value="">ALL</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </p>
  );
}
