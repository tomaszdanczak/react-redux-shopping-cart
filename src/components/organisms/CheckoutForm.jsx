import { useState } from "react";
import Button from "../atoms/Button";
import FormControl from "../molecules/FormControl";

export default function CheckoutForm() {
  const [form, setForm] = useState({ email: "", name: "", address: "" });

  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="border-t border-gray-400 mt-14 pt-4 relative overflow-hidden">
      <form className="relative w-full h-full animate-fade-in">
        <FormControl
          value={form.email}
          onChangeInput={handleChangeInput}
          name="email"
          type="email"
        />
        <FormControl
          value={form.name}
          onChangeInput={handleChangeInput}
          name="name"
          type="text"
        />
        <FormControl
          value={form.address}
          onChangeInput={handleChangeInput}
          name="address"
          type="text"
        />
        <Button
          text="Checkout"
          customStyle="w-full py-2 tracking-widest bg-yellow-300 border border-gray-900 hover:bg-yellow-400 active:bg-yellow-200"
          type="submit"
        />
      </form>
    </div>
  );
}
