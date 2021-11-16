import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from "../../redux/actions/productsActions";

export default function SelectOrder() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.productsState.sort);

  const handleChangeValue = (e) => {
    dispatch(sortProducts(e.target.value));
  };

  return (
    <p>
      Order
      <select value={value} onChange={handleChangeValue}>
        <option value="latest">Latest</option>
        <option value="lowest">Lowest</option>
        <option value="highest">Highest</option>
      </select>
    </p>
  );
}
