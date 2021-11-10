import { capitalizeFirstLetter } from "../../utils";

export default function OrderListItem({ name, children, customStyle }) {
  return (
    <li
      className={
        "flex justify-between items-center p-1 mb-2 border-b " + customStyle
      }
    >
      <div>{capitalizeFirstLetter(name)}:</div>
      <div>{children}</div>
    </li>
  );
}
