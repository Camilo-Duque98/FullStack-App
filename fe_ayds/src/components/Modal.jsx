import { useState } from "react";

const Modal = ({ isvisible }) => {
  //const [isOpen, setIsOpen] = useState(false);
  if (!isvisible) return null;

  return (
    <div className="flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center">
      <div className="w-[600px]">
        <div>X</div>
        <div className="bg-white p-2 rounded">Modal</div>
      </div>
    </div>
  );
};

export default Modal;
