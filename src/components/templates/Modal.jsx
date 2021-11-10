export default function Modal({ onCloseModal, children, isOpen }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 ">
      <div className="absolute left-10 top-32 right-10 border bg-white overflow-auto rounded p-5 pb-20 animate-pop-up lg:inset-x-20 lg:inset-y-20">
        <button
          className="absolute right-6 top-6 border border-gray-500 rounded-sm px-2 py-0 bg-gray-100 hover:border-gray-900  "
          onClick={onCloseModal}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
}
