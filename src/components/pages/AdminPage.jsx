import React from "react";
import Table from "../organisms/Table";

export default function AdminPage() {
  return (
    <div className="w-full p-4">
      <div className="flex justify-center flex-col">
        <h1 className="text-4xl mb-4">Orders</h1>
        <Table />
      </div>
    </div>
  );
}
