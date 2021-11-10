import TableData from "../atoms/TableData";
import { orders } from "./../../data.json";
import { formatCurrency } from "../../utils";

export default function TableBody() {
  return (
    <tbody>
      {orders.map((order) => (
        <tr key={order._id} className="odd:bg-gray-200 even:bg-gray-100">
          <TableData>{order._id}</TableData>
          <TableData>{order.createdAt}</TableData>
          <TableData>{formatCurrency(order.total)}</TableData>
          <TableData>{order.name}</TableData>
          <TableData>{order.email}</TableData>
          <TableData>{order.address}</TableData>
          <TableData>
            {order.cartItems.map((item) => (
              <div key={item._id}>
                {item.count} {" x "} {item.title}
              </div>
            ))}
          </TableData>
        </tr>
      ))}
    </tbody>
  );
}
