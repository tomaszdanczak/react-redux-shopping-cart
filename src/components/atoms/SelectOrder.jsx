export default function SelectOrder() {
  return (
    <p>
      Order
      <select>
        <option value="latest">Latest</option>
        <option value="lowest">Lowest</option>
        <option value="highest">Highest</option>
      </select>
    </p>
  );
}
