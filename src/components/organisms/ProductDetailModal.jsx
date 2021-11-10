import Modal from "../templates/Modal";
import { selectedProduct } from "./../../data.json";
import { formatCurrency } from "../../utils";
import Button from "../atoms/Button";

export default function ProductDetailModal() {
  return (
    <Modal isOpen={false} onCloseModal={""}>
      <div className="grid grid-cols-12 gap-8">
        <img
          className="col-span-5"
          src={selectedProduct.image}
          alt={selectedProduct.title}
        />
        <div className="col-span-6">
          <p className="mb-4">
            <strong className="text-2xl font-semibold">
              {selectedProduct.title}
            </strong>
          </p>
          <p className="mb-4">{selectedProduct.description}</p>
          <p>
            <span className="mr-2">Available Sizes:</span>
            {selectedProduct.availableSizes.map((size) => (
              <span key={size}>
                <button className="border border-gray-300 mr-2 py-1 px-2 bg-gray-100 hover:border-gray-500">
                  {size}
                </button>
              </span>
            ))}
          </p>
          <div className="flex justify-between items-center mt-8">
            <div className="text-center text-2xl w-6/12">
              {formatCurrency(selectedProduct.price)}
            </div>
            <Button
              text="Add to Cart"
              customStyle="w-6/12 py-1 tracking-wider bg-yellow-300 border border-gray-900 hover:bg-yellow-400 active:bg-yellow-200"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
