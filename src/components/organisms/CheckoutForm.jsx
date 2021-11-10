import Button from "../atoms/Button";
import FormControl from "../molecules/FormControl";

export default function CheckoutForm() {
  return (
    <div className="border-t border-gray-400 mt-14 pt-4 relative overflow-hidden">
      <form className="relative w-full h-full animate-fade-in">
        <FormControl name="email" type="email" />
        <FormControl name="name" type="text" />
        <FormControl name="address" type="text" />
        <Button
          text="Checkout"
          customStyle="w-full py-2 tracking-widest bg-yellow-300 border border-gray-900 hover:bg-yellow-400 active:bg-yellow-200"
          type="submit"
        />
      </form>
    </div>
  );
}
