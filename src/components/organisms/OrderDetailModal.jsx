import { useDispatch, useSelector } from "react-redux";
import OrderListItem from "../molecules/OrderListItem";
import Modal from "../templates/Modal";
import { formatCurrency } from "../../utils";
import { clearOrder, hideOrderDetail } from "../../redux/actions/orderActions";

export default function OrderDetailModal() {
  const dispatch = useDispatch();
  const { isOrderDetailOpen, order } = useSelector((state) => state.orderState);

  const handleCloseModal = () => {
    dispatch(hideOrderDetail());
    dispatch(clearOrder());
  };

  if (Object.keys(order).length === 0) {
    return null;
  }

  return (
    <Modal isOpen={isOrderDetailOpen} onCloseModal={handleCloseModal}>
      <div className="flex flex-col justify-center items-center h-full">
        <h3 className="text-green-500">Your order has been placed.</h3>
        <h2 className="text-2xl m-4">Order {order._id}</h2>
        <ul className="w-5/12">
          <OrderListItem name="name">{order.name}</OrderListItem>
          <OrderListItem name="email">{order.email}</OrderListItem>
          <OrderListItem name="address">{order.address}</OrderListItem>
          <OrderListItem name="date">{order.createdAt}</OrderListItem>
          <OrderListItem name="total" customStyle="mb-6">
            {formatCurrency(order.total)}
          </OrderListItem>
          <OrderListItem name="cartItems" customStyle="border p-4 mt-4">
            {order.cartItems.map((cartItem) => (
              <p key={cartItem.title}>
                {cartItem.count} x {cartItem.title}
              </p>
            ))}
          </OrderListItem>
        </ul>
      </div>
    </Modal>
  );
}
