import TableHeader from "../molecules/TableHeader";
import TableBody from "../molecules/TableBody";

export default function Table() {
  return (
    <table className="border-separate">
      <TableHeader />
      <TableBody />
    </table>
  );
}
