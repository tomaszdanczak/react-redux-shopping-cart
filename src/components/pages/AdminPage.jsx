import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/actions/orderActions";
import Table from "../organisms/Table";

export default function AdminPage() {
  const dispatch = useDispatch();
  const { fetchedOrders } = useSelector((state) => state.orderState);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const renderTable = () => {
    if (fetchedOrders === -1) {
      return <h2>Loading...</h2>;
    }

    if (fetchedOrders.length === 0) {
      return <h2>There are no orders</h2>;
    }

    return <Table />;
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-center flex-col">
        <h1 className="text-4xl mb-4">Orders</h1>
        {renderTable()}
      </div>
    </div>
  );
}
