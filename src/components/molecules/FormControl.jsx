import { capitalizeFirstLetter } from "../../utils";

export default function FormControl({ name, type, value, onChangeInput }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mr-4" htmlFor={`form__${name}`}>
        {capitalizeFirstLetter(name)}:
      </label>
      <input
        type={type}
        name={name}
        id={`form__${name}`}
        required
        value={value}
        onChange={onChangeInput}
        className="border border-gray-500 px-2 p-2"
      />
    </div>
  );
}
