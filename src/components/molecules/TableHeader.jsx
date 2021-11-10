export default function TableHeader() {
  return (
    <thead className=" bg-gray-400 text-gray-50 tracking-wider">
      <tr>
        <th className="py-2">ID</th>
        <th>DATE</th>
        <th>TOTAL</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>ADDRESS</th>
        <th>ITEMS</th>
      </tr>
    </thead>
  );
}
